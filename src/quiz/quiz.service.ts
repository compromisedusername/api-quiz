import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './../entities/quiz.entity';
import { automapper } from './../automapper';
import { QuizDto } from 'src/dto/quiz/quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository)
    private readonly quizRepository: QuizRepository,
  ) {}

  findByIds(questionsIds: any) { 
    throw new Error('Method not implemented.'); //todo
  }
  findOne(id: number) {
    throw new Error('Method not implemented.'); //todo
  }
  remove(id: number) {
    throw new Error('Method not implemented.'); //todo
  }
/*   constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {} */

  async findAll(): Promise<QuizDto[]> {
    const quizzes = await this.quizRepository.find();
    return automapper.mapArray(quizzes, QuizDto); // Mapowanie tablicy
  }

 
  async findById(id: number): Promise<QuizDto> {
    const quiz = await this.quizRepository.findOne({ where: { id } });
    return automapper.map(quiz, QuizDto); 
  }
  
  async create(quizDto: QuizDto): Promise<QuizDto> {
    const quiz = automapper.map(quizDto, Quiz); // Mapowanie DTO na encję
    const createdQuiz = await this.quizRepository.save(quiz);
    return automapper.map(createdQuiz, QuizDto);
  }

  async update(id: number, quizDto: QuizDto): Promise<QuizDto> {
    const existingQuiz = await this.quizRepository.findOne({ where: { id } });

    const updatedQuiz = automapper.map(quizDto, Quiz, existingQuiz); // Mapowanie aktualnych i nowych danych
    const savedQuiz = await this.quizRepository.save(updatedQuiz);
    return automapper.map(savedQuiz, QuizDto); 
  }

  async delete(id: number): Promise<void> {
    await this.quizRepository.delete({ id });
  }
  
}