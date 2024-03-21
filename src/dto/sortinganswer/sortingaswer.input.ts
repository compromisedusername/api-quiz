import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Question } from 'src/entities/question.entity';

@InputType()
export class SortingAnswerInput {
    @IsNotEmpty()
    @IsString()
    answerText: string;
  
    @IsNotEmpty()
    @IsNumber()
    correctOrder: number;

    question: Question;
  }