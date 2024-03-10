import { Question } from './question.entity';
export declare class Answer {
    id: number;
    text: string;
    isCorrect: boolean;
    question: Question;
}
