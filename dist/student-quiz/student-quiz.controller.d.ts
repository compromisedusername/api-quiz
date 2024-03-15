import { Quiz } from 'src/entities/quiz.entity';
import { QuizResolver } from './../quiz/quiz.resolver';
export declare class StudentQuizController {
    private readonly quizResolver;
    constructor(quizResolver: QuizResolver);
    findAll(): Promise<Quiz[]>;
    findOne(id: number): Promise<Quiz | undefined>;
}
