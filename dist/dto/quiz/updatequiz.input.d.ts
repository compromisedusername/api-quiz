import { Question } from 'src/entities/question.entity';
export declare class UpdateQuizInput {
    id: number;
    name: string;
    questions: Question[];
}
