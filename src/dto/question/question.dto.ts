export class QuestionDto {
    id: number;
    text: string;
    questionType: QuestionType;
    answers: AnswerDto[];
    sortingAnswers?: SortingAnswerDto[];
  }