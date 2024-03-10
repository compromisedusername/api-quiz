import { QuizService } from './../services/quiz.service';
import { Quiz } from 'src/entities/quiz.entity';
import { CreateQuizInput } from 'src/dto/quiz/createquiz.input';
import { UpdateQuizInput } from 'src/dto/quiz/updatequiz.input';
export declare class QuizResolver {
    private readonly quizService;
    constructor(quizService: QuizService);
    createQuiz(createQuizInput: CreateQuizInput): Promise<Quiz>;
    findAll(): Promise<Quiz[]>;
    findOne(id: number): Promise<void>;
    updateQuiz(updateQuizInput: UpdateQuizInput): Promise<Quiz>;
    removeQuiz(id: number): Promise<void>;
}
