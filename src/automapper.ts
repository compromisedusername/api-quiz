import { AutoMapper, Profile } from 'automapper'
import { Quiz } from './entities/quiz.entity'
import { QuizDto } from './dto/quiz/quiz.dto'
import { CreateQuizInput } from './dto/quiz/createquiz.input'
import { QuestionDto } from './dto/question/question.dto';
import { Question } from './entities/question.entity';
import { AnswerDto } from './dto/answer/answer.dto';
import { AnswerInput } from './dto/answer/answer.input';
import { QuestionInput } from './dto/question/question.input';
import { Answer } from './entities/answer.entity';

const automapper = new AutoMapper();
@Profile()
export class QuizProfile {
  constructor() {
    automapper.createMap(Quiz, QuizDto)
      .forMember('questions', opts => opts.mapFrom(quiz => quiz.questions.map(q => ({
        id: q.id,
        text: q.text,
        questionType: q.questionType,
        answers: q.answers.map(a => ({
          id: a.id,
          text: a.text,
          isCorrect: a.isCorrect,
        })),
      }))));

    automapper.createMap(CreateQuizInput, Quiz)
      .forMember('questions', opts => opts.mapFrom(input => input.questions.map(q => ({
        text: q.text,
        questionType: q.questionType,
        answers: q.answers.map(a => ({
          text: a.text,
          isCorrect: a.isCorrect,
        })),
      }))));

    // Mapowania dla pozostałych DTO i encji
    automapper.createMap(Question, QuestionDto);
    automapper.createMap(QuestionInput, Question);
    automapper.createMap(Answer, AnswerDto);
    automapper.createMap(AnswerInput, Answer);


  }
}

export { automapper };