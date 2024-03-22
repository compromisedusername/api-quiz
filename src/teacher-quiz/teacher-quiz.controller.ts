import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Quiz } from 'src/entities/quiz.entity';
import { QuizResolver } from './../quiz/quiz.resolver';
import { UpdateQuizInput } from 'src/dto/quiz/updatequiz.input';

@Controller('teacher/quiz') // Dodanie prefiksu
export class TeacherQuizController {
  constructor(private readonly quizResolver: QuizResolver) {}

  @Get()
  async findAll(): Promise<Quiz[]> {
    return await this.quizResolver.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Quiz | undefined> {
    return await this.quizResolver.findOne(id);
  }

  @Post()
  async createQuiz(@Body() quiz: Quiz): Promise<Quiz> {
    return await this.quizResolver.createQuiz(quiz);
  }

  @Put(':id')
  async updateQuiz(@Param('id') id: number, @Body() quiz: Quiz): Promise<Quiz> {
    return await this.quizResolver.updateQuiz(quiz);
  }

  @Delete(':id')
  async deleteQuiz(@Param('id') id: number): Promise<void> {
    await this.quizResolver.removeQuiz(id);
  }
}
