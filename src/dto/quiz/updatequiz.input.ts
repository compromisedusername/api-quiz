import { IsInt, IsString, IsOptional, IsArray } from 'class-validator';
import { Question } from 'src/entities/question.entity';
import { Field, InputType, Int } from '@nestjs/graphql';
import { CreateQuestionInput } from '../question/createquestion.input';
import { UpdateQuestionInput } from '../question/updatequestion.input';

@InputType()
export class UpdateQuizInput {
    @Field(() => Int)
    @IsInt() 
    id: number;
    @Field(() => String)
    @IsString()
    name: string;
  
    @IsArray()
    @Field(()=>[UpdateQuestionInput])
    questions: UpdateQuestionInput[];
 }
  
  