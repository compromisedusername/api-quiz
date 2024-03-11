import { Repository } from 'typeorm';
import { Quiz } from './../entities/quiz.entity';
export declare class QuizRepository extends Repository<Quiz> {
    findAll(): Promise<Quiz[]>;
    findById(id: number): Promise<Quiz | undefined>;
    createQuiz(quiz: Quiz): Promise<Quiz>;
    updateQuiz(quiz: Quiz): Promise<Quiz>;
    deleteQuiz(id: number): Promise<void>;
}
