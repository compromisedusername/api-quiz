import { IsNotEmpty, IsString, IsEnum, IsArray } from 'class-validator';
import { AnswerInput } from '../answer/answer.input';
import { SortingAnswerInput } from '../sortinganswer/sortingaswer.input';

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
    sortingAnswers?: SortingAnswerInput[];
  }