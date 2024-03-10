export class SortingAnswerInput {
    @IsNotEmpty()
    @IsString()
    answerText: string;
  
    @IsNotEmpty()
    @IsNumber()
    correctOrder: number;
  }