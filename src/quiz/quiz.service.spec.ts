import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';
import { QuizRepository } from './quiz.repository'; // Dopasuj nazwę pliku, jeśli jest inna
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Question } from 'src/entities/question.entity';
import { create } from 'domain';

describe('QuizService', () => {
  let service: QuizService;
  let quizRepository: QuizRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuizService,
        {
          provide: getRepositoryToken(QuizRepository), 
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<QuizService>(QuizService);
    quizRepository = module.get<QuizRepository>(getRepositoryToken(QuizRepository));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all quizzes', async () => {
      const quizzes = [
        // Przykładowe encje quizów
      ];
      jest.spyOn(quizRepository, 'find').mockResolvedValue(quizzes); 

      const result = await service.findAll();
      expect(result).toEqual(quizzes);
      expect(quizRepository.find).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a quiz by id', async () => {
      const quiz = { id: 1, name: 'Quiz 1', questions: [] };
      jest.spyOn(quizRepository, 'findOne').mockResolvedValue(quiz);

      const result = await service.findById(1);
      expect(result).toEqual(quiz);
      expect(quizRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });

  describe('create', () => {
    it('should create a new quiz', async () => {
      const newQuiz = { name: 'New Quiz' };
      const createdQuiz = { id: 1, ...newQuiz, questions: [] };
      jest.spyOn(quizRepository, 'save').mockResolvedValue(createdQuiz);

      const result = await service.create(createdQuiz);
      expect(result).toEqual(createdQuiz);
      expect(quizRepository.save).toHaveBeenCalledWith(newQuiz);
    });
  });

  describe('update', () => {
    it('should update a quiz by id', async () => {
      const id = 1;
      const updatedQuiz = { id: 1, name: 'Updated Quiz', questions: [] };
      const existingQuiz = { id: 1, name: 'Old Quiz', questions: [] };  
      const expectedResult = { id: 1, ...updatedQuiz }; 
      jest.spyOn(quizRepository, 'findOne').mockResolvedValue(existingQuiz);
      jest.spyOn(quizRepository, 'save').mockResolvedValue(expectedResult);

      const result = await service.update(id, updatedQuiz);
      expect(result).toEqual(expectedResult);
      expect(quizRepository.findOne).toHaveBeenCalledWith({ where: { id } });
      expect(quizRepository.save).toHaveBeenCalledWith({ ...existingQuiz, ...updatedQuiz });
    });

    it('should throw an error if quiz is not found', async () => {
      jest.spyOn(quizRepository, 'findOne').mockResolvedValue(undefined);

      await expect(service.update(1, {id: 1, name: 'Updated Quiz ', questions: []})).rejects.toThrowError('Quiz not found');
      expect(quizRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });

  describe('delete', () => {
    it('should delete a quiz by id', async () => {
      jest.spyOn(quizRepository, 'delete').mockResolvedValue(undefined);

      await service.delete(1);
      expect(quizRepository.delete).toHaveBeenCalledWith({ id: 1 });
    });
  });
});