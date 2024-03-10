import { Injectable } from '@nestjs/common';
import { Query, Mutation, Resolver, Args, Int } from '@nestjs/graphql';
import { v4 as uuid } from 'uuid'; 

import { QuizService } from './../services/quiz.service';
import { Quiz } from 'src/entities/quiz.entity';
import { CreateQuizInput } from 'src/dto/quiz/createquiz.input';
import { UpdateQuizInput } from 'src/dto/quiz/updatequiz.input';
import { Question } from 'src/entities/question.entity';
import { QuestionInput } from 'src/dto/question/question.input';
import { SortingAnswer } from 'src/entities/sortinganswer';
import { Answer } from 'src/entities/answer.entity';

@Resolver(() => Quiz) 
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @Mutation(() => Quiz)
async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
  const questions = createQuizInput.questions.map(mapQuestionInputToQuestion); 

  const newQuiz = { 
    id: uuid(),
    name: createQuizInput.name,
    questions
  };

  return await this.quizService.create(newQuiz);
}

  @Query(() => [Quiz], { name: 'quizzes' }) 
  async findAll() {
    return this.quizService.findAll();
  }

  @Query(() => Quiz, { name: 'quiz' }) 
  async findOne(@Args('id', { type: () => Int }) id: number) { 
    return this.quizService.findOne(id);
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
  const question = new Question();
  question.text = input.text;
  question.questionType = input.questionType;

  if (input.answers) {
    question.answers = input.answers.map((answerInput) => {
      const answer = new Answer();
      answer.text = answerInput.text;
      answer.isCorrect = answerInput.isCorrect;
      answer.question = question; // Ustawienie relacji
      return answer;
    });
  }

  if (input.sortingAnswers) {
    question.sortingAnswers = input.sortingAnswers.map((sortingAnswerInput) => {
      const sortingAnswer = new SortingAnswer();
      sortingAnswer.answerText = sortingAnswerInput.answerText;
      sortingAnswer.correctOrder = sortingAnswerInput.correctOrder;
      sortingAnswer.question = question; // Ustawienie relacji
      return sortingAnswer;
    });
  }

  return question;
}

