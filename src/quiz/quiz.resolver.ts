import { Injectable } from '@nestjs/common';
import { Query, Mutation, Resolver, Args, Int } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid'; 

import { QuizService } from './quiz.service';
import { Quiz } from './../entities/quiz.entity';
import { CreateQuizInput } from './../dto/quiz/createquiz.input';
import { UpdateQuizInput } from './../dto/quiz/updatequiz.input';
import { Question } from './../entities/question.entity';
import { QuestionInput } from './../dto/question/question.input';
import { SortingAnswer } from './../entities/sortinganswer';
import { Answer } from './../entities/answer.entity';
import { automapper } from './../automapper';
import { QuizDto } from 'src/dto/quiz/quiz.dto';

@Resolver(() => Quiz) 
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}


  @Mutation(() => Quiz)
async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
    const quiz = automapper.map(createQuizInput, Quiz);
    return await this.quizService.create(quiz);
}
 /*  @Mutation(() => Quiz)
async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
  const questions = createQuizInput.questions.map(mapQuestionInputToQuestion); 

  const newQuiz = { 
    id: uuid(),
    name: createQuizInput.name,
    questions
  };

  return await this.quizService.create(newQuiz);
} */

@Query(() => [Quiz], { name: 'quizzes' }) 
async findAll() {
   const quizzes = await this.quizService.findAll(); 
   return automapper.mapArray(quizzes, QuizDto); 
}

@Query(() => Quiz, { name: 'quiz' }) 
async findOne(@Args('id', { type: () => Int }) id: number) { 
   const quiz = await this.quizService.findById(id);
   return automapper.map(quiz, QuizDto); 
}

  @Mutation(() => Quiz)
  async updateQuiz(@Args('updateQuizInput') updateQuizInput: UpdateQuizInput) {
    return this.quizService.update(updateQuizInput.id, updateQuizInput, );
  }

  @Mutation(() => Quiz)
  async removeQuiz(@Args('id', { type: () => Int }) id: number) {
    return this.quizService.remove(id);
  }

  
}

function mapQuestionInputToQuestion(input: QuestionInput): Question {
  const question = automapper.map(input, Question);

  if (input.answers) {
    question.answers = input.answers.map((answerInput) => {
      const answer = automapper.map(answerInput, Answer);
      answer.question = question; // Ustawienie relacji
      return answer;
    });
  }

  if (input.sortingAnswers) {
    question.sortingAnswers = input.sortingAnswers.map(
      (sortingAnswerInput) => {
        const sortingAnswer = automapper.map(sortingAnswerInput, SortingAnswer);
        sortingAnswer.question = question; // Ustawienie relacji
        return sortingAnswer;
      }
    );
  }

  return question;
}

