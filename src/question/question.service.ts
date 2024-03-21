import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './../entities/question.entity';
import { CreateQuestionInput } from './../dto/question/createquestion.input';
import { UpdateQuestionInput } from './../dto/question/updatequestion.input';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: QuestionRepository,
  ) {}

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    return this.questionRepository.findOne({ where: { id } });
  }

  async create(createQuestionInput: CreateQuestionInput): Promise<Question> {
    const question = this.questionRepository.create(createQuestionInput);
    return this.questionRepository.save(question);
  }

  async update(id: number, updateQuestionInput: UpdateQuestionInput): Promise<Question> {
    const question = await this.questionRepository.findOne({ where: { id } });
    if (!question) {
      throw new Error('Question not found');
    }
    Object.assign(question, updateQuestionInput);
    return this.questionRepository.save(question);
  }

  async delete(id: number): Promise<Question> {
    const question = await this.questionRepository.findOne({ where: { id } });
    if (!question) {
      throw new Error('Question not found');
    }
    await this.questionRepository.delete(question);
    return question;
  }
}