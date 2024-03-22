import { IsNotEmpty, IsString, IsArray, IsEnum, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { InputType, Field, Int, registerEnumType } from '@nestjs/graphql'; // Usunięto import Int, ponieważ nie jest używany w tej klasie DTO
import { QuestionType } from '../../entities/question.enum';
import { SortingAnswerInput } from '../sortinganswer/sortingaswer.input';
import { AnswerInput } from '../answer/answer.input';
import { EnumDefinitionFactory } from '@nestjs/graphql/dist/schema-builder/factories/enum-definition.factory';


  
@InputType()
export class CreateQuestionInput {

    
    @IsNotEmpty()
    @IsString()
    @Field(()=>String)
    text: string;

    
    @IsNotEmpty()
    @IsString()
    @Field(()=>String)
    questionType: string;

    /* @Field(() => Int)
    @IsNotEmpty()
    quiz: number; */

    @ArrayMinSize(1)
    @ArrayMaxSize(10) 
    @Field(() => [AnswerInput])
    answers: AnswerInput[];

    @ArrayMinSize(1)
    @ArrayMaxSize(10) 
    @Field(() => [SortingAnswerInput])
    sortingAnswer: SortingAnswerInput[];
}