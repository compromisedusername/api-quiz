import { Repository } from 'typeorm';
import { Quiz } from './../entities/quiz.entity';
export declare class QuizService {
    private readonly quizRepository;
    constructor(quizRepository: Repository<Quiz>);
    findAll(): Promise<Quiz[]>;
    findById(id: number): Promise<Quiz>;
    create(quiz: Quiz): Promise<Quiz>;
    update(id: number, quiz: Quiz): Promise<Quiz>;
    delete(id: number): Promise<void>;
}
