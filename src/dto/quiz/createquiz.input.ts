export class CreateQuizInput {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsArray()
    questions: QuestionInput[];
  }