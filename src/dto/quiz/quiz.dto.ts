import { QuestionDto } from "../question/question.dto";

export class QuizDto {
    id: number;
    name: string;
    questions: QuestionDto[];
  }