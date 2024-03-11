import { Quiz } from 'src/entities/quiz.entity';
import { QuizResolver } from './quiz.resolver';
export declare class QuizController {
    private readonly quizResolver;
    constructor(quizResolver: QuizResolver);
    findAll(): Promise<Quiz[]>;
    findOne(id: number): Promise<Quiz | undefined>;
    createQuiz(quiz: Quiz): Promise<Quiz>;
    updateQuiz(id: number, quiz: Quiz): Promise<Quiz>;
    deleteQuiz(id: number): Promise<void>;
}
