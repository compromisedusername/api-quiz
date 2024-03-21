import { IsNotEmpty, IsString, IsArray, IsEnum, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { QuestionInput } from '../question/question.input';
import { InputType, Field, Int } from '@nestjs/graphql'; // Usunięto import Int, ponieważ nie jest używany w tej klasie DTO
import { QuestionType } from '../../entities/question.enum';
import { SortingAnswerInput } from '../sortinganswer/sortingaswer.input';
import { AnswerInput } from '../answer/answer.input';

@InputType()
export class CreateQuestionInput {
    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsEnum(QuestionType)
    questionType: QuestionType;

    /* @Field(() => Int)
    @IsNotEmpty()
    quiz: number; */

    @ArrayMinSize(1)
    @ArrayMaxSize(10) // Adjust maximum based on your requirements
    @Field(() => [AnswerInput])
    answers: AnswerInput[];

    @ArrayMinSize(1)
    @ArrayMaxSize(10) // Adjust maximum based on your requirements
    @Field(() => [SortingAnswerInput])
    sortingAnswer: SortingAnswerInput[];
}