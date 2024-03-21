import { Repository } from 'typeorm';
import { Question } from './../entities/question.entity';
import { Injectable } from '@nestjs/common';


@Injectable() 
export class QuestionRepository extends Repository<Question> {
    async findAll(): Promise<Question[]> {
        return await this.find();
      }
    
      async findById(id: number): Promise<Question | undefined> {
        return await this.findById(id);
      }
    
      async createQuestion(quiz: Question): Promise<Question> {
        return await this.save(quiz);
      }
    
      async updateQuestion(quiz: Question): Promise<Question> {
        return await this.save(quiz);
      }
    
      async deleteQuestion(id: number): Promise<void> {
        await this.delete(id);
      }

} 