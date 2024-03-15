import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizResolver } from './quiz.resolver';
import { QuizController } from './quiz.controller';
import { TeacherQuizController } from 'src/teacher-quiz/teacher-quiz.controller';
import { StudentQuizController } from 'src/student-quiz/student-quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from 'src/entities/quiz.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([Quiz]) 
    ],
    providers: [QuizService, QuizResolver, QuizRepository], 
    controllers: [QuizController, TeacherQuizController, StudentQuizController],
  })
  export class QuizModule {}