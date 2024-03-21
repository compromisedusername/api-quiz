import { Question } from './question.entity';
export declare class SortingAnswer {
    id: number;
    answerText: string;
    correctOrder: number;
    question: Question;
}
