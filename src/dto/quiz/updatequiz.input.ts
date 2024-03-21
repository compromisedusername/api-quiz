import { IsInt, IsString, IsOptional, IsArray } from 'class-validator';
import { QuestionInput } from '../question/question.input';
import { Question } from 'src/entities/question.entity';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateQuizInput {
    @Field(() => Int)
    @IsInt() 
    id: number;
    @Field(() => String)
    @IsString()
    name: string;
  
    @IsArray()
    questions: Question[];
 }
  
  