import { AnswerDto } from "../answer/answer.dto";
import { SortingAnswerDto } from "../sortinganswer/sortinganswer.dto";

export class QuestionDto {
    id: number;
    text: string;
    questionType: QuestionType;
    answers: AnswerDto[];
    sortingAnswers?: SortingAnswerDto[];
  }