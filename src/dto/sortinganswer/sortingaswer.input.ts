import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SortingAnswerInput {
    @IsNotEmpty()
    @IsString()
    answerText: string;
  
    @IsNotEmpty()
    @IsNumber()
    correctOrder: number;
  }