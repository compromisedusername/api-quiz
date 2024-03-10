import { QuizService } from './quiz.service';
import { CreateQuizInput } from './../dto/quiz/createquiz.input';
import { UpdateQuizInput } from './../dto/quiz/updatequiz.input';
export declare class QuizResolver {
    private readonly quizService;
    constructor(quizService: QuizService);
    createQuiz(createQuizInput: CreateQuizInput): Promise<Quiz>;
    findAll(): Promise<Quiz[]>;
    findOne(id: number): Promise<void>;
    updateQuiz(updateQuizInput: UpdateQuizInput): Promise<Quiz>;
    removeQuiz(id: number): Promise<void>;
}
