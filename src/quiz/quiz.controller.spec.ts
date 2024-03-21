import { Test, TestingModule } from '@nestjs/testing';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { QuestionDto } from 'src/dto/question/question.dto';
import { Question } from 'src/entities/question.entity';

describe('QuizController', () => {
  let controller: QuizController;
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizController],
      providers: [QuizService],
    }).compile();

    controller = module.get<QuizController>(QuizController);
    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all quizzes', async () => {
      const quizzes = await controller.findAll();
      expect(quizzes).toBeInstanceOf(Array);
    });
  });

  describe('findOne', () => {
    it('should return a quiz by id', async () => {
      const quiz = await controller.findOne(1);
      expect(quiz).toBeDefined();
      expect(quiz.id).toBe(1);
    });
  });

  describe('createQuiz', () => {
    it('should create a new quiz', async () => {
      const newQuiz = {
        id: 1,
        name: 'nazwa',
        questions: [
          new Question()
        ],
      };
      const createdQuiz = await controller.createQuiz(newQuiz);
      expect(createdQuiz).toBeDefined();
      expect(createdQuiz.name).toBe('New Quiz');
    });
  });

  describe('updateQuiz', () => {
    it('should update a quiz by id', async () => {
      const updatedQuiz = {
        id: 1,
        name: 'Updated Quiz',
        questions: [],
      };
      const updated = await controller.updateQuiz(1, updatedQuiz);
      expect(updated).toBeDefined();
      expect(updated.name).toBe('Updated Quiz');
    });
  });

  describe('deleteQuiz', () => {
    it('should delete a quiz by id', async () => {
      await controller.deleteQuiz(1);
      const deletedQuiz = await service.findById(1);
      expect(deletedQuiz).toBeUndefined();
    });
  });
});