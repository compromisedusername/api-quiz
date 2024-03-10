import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { QuestionInput } from '../question/question.input';

export class CreateQuizInput {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsArray()
    questions: QuestionInput[];
  }