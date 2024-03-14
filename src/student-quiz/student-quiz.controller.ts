import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Quiz } from 'src/entities/quiz.entity';
import { QuizResolver } from './../quiz/quiz.resolver';

@Controller('student/quiz')
export class StudentQuizController {
  constructor(private readonly quizResolver: QuizResolver) {}

  @Get()
  async findAll(): Promise<Quiz[]> {
    return await this.quizResolver.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Quiz | undefined> {
    return await this.quizResolver.findOne(id);
  }

}