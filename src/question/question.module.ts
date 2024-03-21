import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { Question } from 'src/entities/question.entity';

@Module({
  providers: [QuestionService],
  imports: [TypeOrmModule.forFeature([Question, QuestionRepository])], // Include QuestionRepository

})
export class QuestionModule {}