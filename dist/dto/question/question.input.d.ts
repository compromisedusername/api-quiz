import { AnswerInput } from '../answer/answer.input';
import { SortingAnswerInput } from '../sortinganswer/sortingaswer.input';
import { QuestionType } from './../../entities/question.enum';
export declare class QuestionInput {
    text: string;
    questionType: QuestionType;
    answers: AnswerInput[];
    sortingAnswer: SortingAnswerInput[];
}
