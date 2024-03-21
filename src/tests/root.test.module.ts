import { Module } from '@nestjs/common';
import { QuizService } from '../quiz/quiz.service';
import { QuizRepository } from '../quiz/quiz.repository'; 

@Module({
  providers: [QuizService, QuizRepository], 
  exports: [QuizService], 
})
export class RootTestModule {}