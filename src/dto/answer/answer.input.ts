import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

@InputType()
export class AnswerInput {
    @Field(()=>String)
    @IsNotEmpty()
    @IsString()
    text: string;
  
    @Field(()=>Boolean)
    @IsNotEmpty()
    @IsBoolean()
    isCorrect: boolean;
  }