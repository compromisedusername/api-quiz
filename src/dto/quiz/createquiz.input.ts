import { IsNotEmpty, IsString, IsArray } from 'class-validator';

import { InputType, Field } from '@nestjs/graphql'; // Usunięto import Int, ponieważ nie jest używany w tej klasie DTO
import { CreateQuestionInput } from '../question/createquestion.input';

@InputType()
export class CreateQuizInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string;
    @Field(()=>[CreateQuestionInput])
    @IsArray()
    questions: CreateQuestionInput[];
    
}