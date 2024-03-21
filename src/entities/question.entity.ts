import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Answer } from './answer.entity';
import { SortingAnswer } from './sortinganswer.entity';
import { QuestionType } from './question.enum';




@Entity()
export class Question {
  
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  text: string;

  @Column({
    type: 'enum',
    enum: QuestionType,
  })
  questionType: QuestionType;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quizId: number;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @OneToMany(() => SortingAnswer, (sortingAnswer) => sortingAnswer.question)
  sortingAnswer: SortingAnswer[];
}
