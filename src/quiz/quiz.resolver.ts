import { Injectable } from '@nestjs/common';
import { Query, Mutation, Resolver, Args, Int } from '@nestjs/graphql';
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
  constructor(private readonly quizService: QuizService) {}
  @Mutation(() => Quiz)
  async createQuiz(@Args('createQuizInput') createQuizInput: CreateQuizInput) {
    const newQuiz = new Quiz();
    newQuiz.name = createQuizInput.name;
    const createdQuiz = await this.quizService.create(newQuiz); // Save quiz
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

 