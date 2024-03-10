import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quiz } from './../entities/quiz.entity';

@Injectable() 
export class QuizRepository extends Repository<Quiz> {
    async findAll(): Promise<Quiz[]> {
        return await this.find();
      }
    
      async findById(id: number): Promise<Quiz | undefined> {
        return await this.findById(id);
      }
    
      async createQuiz(quiz: Quiz): Promise<Quiz> {
        return await this.save(quiz);
      }
    
      async updateQuiz(quiz: Quiz): Promise<Quiz> {
        return await this.save(quiz);
      }
    
      async deleteQuiz(id: number): Promise<void> {
        await this.delete(id);
      }

} 