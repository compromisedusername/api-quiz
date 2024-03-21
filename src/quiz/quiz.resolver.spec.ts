import { Test, TestingModule } from '@nestjs/testing';
import { QuizResolver } from './quiz.resolver';
import { QuizService } from './quiz.service';
import { Question } from 'src/entities/question.entity';
import { QuestionDto } from 'src/dto/question/question.dto';

describe('QuizResolver', () => {
  let resolver: QuizResolver;
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuizResolver,
        {
          provide: QuizService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<QuizResolver>(QuizResolver);
    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createQuiz', () => {
    it('should create a new quiz', async () => {
      const newQuizInput = {
        id: 1,
        name: 'New Quiz',
        questions: [],
      };
      const createdQuiz = {
        id: 2, // Zamiast '1234' 
        name: 'New Quiz',
        questions: [],
      };
      jest.spyOn(service, 'create').mockResolvedValue(createdQuiz); // Symulowanie odpowiedzi serwisu quizService.create 

      const result = await resolver.createQuiz(newQuizInput);
      expect(result).toEqual(createdQuiz);
      expect(service.create).toHaveBeenCalledWith(newQuizInput);
    });
  });

  describe('findAll', () => {
    it('should return all quizzes', async () => {
      const quizzes = [
        { id: 1, name: 'Quiz 1', questions: [new Question()] }, // Dodany przykładowy 'questions'
        { id: 2, name: 'Quiz 2', questions: [new Question()] }, 
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(quizzes); // Symulowanie odpowiedzi quizService.findAll

      const result = await resolver.findAll();
      expect(result).toEqual(quizzes);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a quiz by id', async () => {
      const quiz = {
        id: 1234, 
        name: 'New Quiz',
        questions: [],
      };
      jest.spyOn(service, 'findById').mockResolvedValue(quiz); // Symulowanie odpowiedzi quizService.findById

      const result = await resolver.findOne(1);
      expect(result).toEqual(quiz);
      expect(service.findById).toHaveBeenCalledWith(1);
    });
  });



})
