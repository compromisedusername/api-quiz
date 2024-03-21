import { IsNotEmpty, IsString, IsArray } from 'class-validator';
import { QuestionInput } from '../question/question.input';
import { InputType, Field } from '@nestjs/graphql'; // Usunięto import Int, ponieważ nie jest używany w tej klasie DTO

@InputType()
export class CreateQuizInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    name: string;
    @IsArray()
    questions: QuestionInput[];
    
}