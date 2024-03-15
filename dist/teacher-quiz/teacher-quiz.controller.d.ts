import { Quiz } from 'src/entities/quiz.entity';
import { QuizResolver } from './../quiz/quiz.resolver';
export declare class TeacherQuizController {
    private readonly quizResolver;
    constructor(quizResolver: QuizResolver);
    findAll(): Promise<Quiz[]>;
    findOne(id: number): Promise<Quiz | undefined>;
    createQuiz(quiz: Quiz): Promise<Quiz>;
    updateQuiz(id: number, quiz: Quiz): Promise<Quiz>;
    deleteQuiz(id: number): Promise<void>;
}
