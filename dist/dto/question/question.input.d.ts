import { AnswerInput } from '../answer/answer.input';
import { SortingAnswerInput } from '../sortinganswer/sortingaswer.input';
export declare class QuestionInput {
    text: string;
    questionType: QuestionType;
    answers: AnswerInput[];
    sortingAnswers?: SortingAnswerInput[];
}
