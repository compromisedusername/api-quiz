export class AnswerInput {
    @IsNotEmpty()
    @IsString()
    text: string;
  
    @IsNotEmpty()
    @IsBoolean()
    isCorrect: boolean;
  }