import { StudentQuizController } from './student-quiz.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { QuizController } from './../quiz/quiz.controller';
import { QuizService } from './../quiz/quiz.service';
import { QuestionDto } from './../dto/question/question.dto';
import { Question } from './../entities/question.entity';

describe('StudentQuizController', () => {
  let controller: StudentQuizController
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizController],
      providers: [QuizService],
    }).compile();

    controller = module.get<StudentQuizController>(StudentQuizController);
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

})

