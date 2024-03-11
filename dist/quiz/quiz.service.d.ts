import { QuizRepository } from './quiz.repository';
import { Quiz } from './../entities/quiz.entity';
export declare class QuizService {
    private readonly quizRepository;
    constructor(quizRepository: QuizRepository);
    findByIds(questionsIds: any): void;
    findOne(id: number): void;
    remove(id: number): void;
    findAll(): Promise<Quiz[]>;
    findById(id: number): Promise<Quiz>;
    create(quiz: Quiz): Promise<Quiz>;
    update(id: number, quiz: Quiz): Promise<Quiz>;
    delete(id: number): Promise<void>;
}
