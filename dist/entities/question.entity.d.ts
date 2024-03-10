import { Quiz } from './quiz.entity';
import { Answer } from './answer.entity';
import { SortingAnswer } from './sortinganswer';
export declare class Question {
    id: number;
    text: string;
    questionType: QuestionType;
    quiz: Quiz;
    answers: Answer[];
    sortingAnswers: SortingAnswer[];
}
