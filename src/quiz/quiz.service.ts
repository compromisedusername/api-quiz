import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './../entities/quiz.entity';
import { QuestionRepository } from 'src/question/question.repository';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private readonly quizRepository: QuizRepository) {}





  async findAll(): Promise<Quiz[]> {
    return await this.quizRepository.find();
  }

  async findById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({ where: { id } });
  }

  async create(quiz: Quiz): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }

  async update(id: number, quiz: Quiz): Promise<Quiz> {
    const existingQuiz = await this.quizRepository.findOne({ where: { id } });
    if (!existingQuiz) {
      throw new Error('Quiz not found');
    }

    return await this.quizRepository.save({ ...existingQuiz, ...quiz });
  }

  async delete(id: number): Promise<void> {
    await this.quizRepository.delete({ id });
  }
  
}











