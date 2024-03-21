import { Injectable } from '@nestjs/common';
import { Query, Mutation, Resolver, Args, Int } from '@nestjs/graphql';
import { QuestionService } from './../question/question.service'
import { QuizService } from './quiz.service';
import { Quiz } from './../entities/quiz.entity';
import { CreateQuizInput } from './../dto/quiz/createquiz.input';
import { UpdateQuizInput } from './../dto/quiz/updatequiz.input';
import { Question } from './../entities/question.entity';
import { QuestionInput } from './../dto/question/question.input';
import { SortingAnswer } from '../entities/sortinganswer.entity';
import { Answer } from './../entities/answer.entity';
let currentQuizId = 1;
@Resolver(() => Quiz) 
export class QuizResolver {
  constructor(private readonly quizService: QuizService, private readonly questionService: QuestionService) {}
  @Mutation(() => Quiz)
  async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
    const newQuiz = new Quiz();
    newQuiz.name = createQuizInput.name;
  
    const createdQuiz = await this.quizService.create(newQuiz); // Save quiz first
  
    // Create and associate questions (assuming QuestionInput has necessary data)
    const questions = createQuizInput.questions.map(async (questionInput) => {
      const question = new Question(/* populate question properties from questionInput */);
      question.quiz = createdQuiz; // Set reference to the newly created quiz
      return await this.questionService.create(question); // Save each question
    });
  
    // Wait for all questions to be created (using Promise.all)
    const createdQuestions = await Promise.all(questions);
  
    // Update quiz with created questions (optional, depending on your needs)
    createdQuiz.questions = createdQuestions;
    await this.quizService.update(createdQuiz.id, createdQuiz); // Save updated quiz
  
    return createdQuiz;
  }
  

  @Query(() => [Quiz], { name: 'quizzes' }) 
  async findAll() {
    return this.quizService.findAll();
  }

  @Query(() => Quiz, { name: 'quiz' }) 
  async findOne(@Args('id', { type: () => Int }) id: number) { 
    return this.quizService.findById(id);
  }

  @Mutation(() => Quiz)
  async updateQuiz(@Args('updateQuizInput') updateQuizInput: UpdateQuizInput) {
    return this.quizService.update(updateQuizInput.id, updateQuizInput, );
  }

  @Mutation(() => Quiz)
  async removeQuiz(@Args('id', { type: () => Int }) id: number) {
    return this.quizService.delete(id);
  }

  
}

 