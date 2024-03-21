import { IsNotEmpty, IsString, IsEnum, IsArray } from 'class-validator';
import { AnswerInput } from '../answer/answer.input';
import { SortingAnswerInput } from '../sortinganswer/sortingaswer.input';
import { QuestionType } from './../../entities/question.enum';
import { InputType } from '@nestjs/graphql';

@InputType()
export class QuestionInput {
    @IsNotEmpty()
    @IsString()
    text: string;
    
    @IsNotEmpty()
    @IsEnum(QuestionType)
    questionType: QuestionType;
    
    @IsArray()
    answers: AnswerInput[];
    
    @IsArray()
    sortingAnswer: SortingAnswerInput[];
  }