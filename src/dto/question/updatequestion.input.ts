import { IsNotEmpty, IsString, IsArray, IsEnum } from 'class-validator';
import { InputType, Field, Int } from '@nestjs/graphql'; // Usunięto import Int, ponieważ nie jest używany w tej klasie DTO
import { QuestionType } from '../../entities/question.enum';
import { SortingAnswerInput } from '../sortinganswer/sortingaswer.input';
import { AnswerInput } from '../answer/answer.input';

@InputType()
export class UpdateQuestionInput {
    @Field(() => Int)
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @Field((()=>String))
    text: string;

    @IsNotEmpty()
    @IsString()
    @Field((()=>String))
    questionType: string;

    @Field(() => Int)
    @IsNotEmpty()
    quiz: number;

    @Field(() => [AnswerInput])
    answers: AnswerInput[];

    @Field(() => [SortingAnswerInput])
    sortingAnswer: SortingAnswerInput[];
}