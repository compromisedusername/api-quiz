import { IsInt, IsString, IsOptional, IsArray } from 'class-validator';
import { QuestionInput } from '../question/question.input';
import { Question } from 'src/entities/question.entity';
export class UpdateQuizInput {
    @IsInt() 
    id: number;
  
    @IsString()
    name: string;
  
    @IsArray()
    questions: Question[];
 }
  
  