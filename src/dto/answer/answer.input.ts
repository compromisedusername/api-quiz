import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';
export class AnswerInput {
    @IsNotEmpty()
    @IsString()
    text: string;
  
    @IsNotEmpty()
    @IsBoolean()
    isCorrect: boolean;
  }