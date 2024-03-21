import { AnswerDto } from "../answer/answer.dto";
import { SortingAnswerDto } from "../sortinganswer/sortinganswer.dto";
import { QuestionType } from './../../entities/question.enum';

export class QuestionDto {
    id: number;
    text: string;
    questionType: QuestionType;
    answers: AnswerDto[];
    sortingAnswer: SortingAnswerDto[];
  }