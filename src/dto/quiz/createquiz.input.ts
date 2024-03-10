import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateQuizInput {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsArray()
    questions: QuestionInput[];
  }