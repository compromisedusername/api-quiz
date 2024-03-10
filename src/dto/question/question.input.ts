import { IsNotEmpty, IsString, IsEnum, IsArray } from 'class-validator';

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