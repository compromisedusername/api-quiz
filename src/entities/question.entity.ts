import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Answer } from './answer.entity';

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
  quiz: Quiz;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @OneToMany(() => SortingAnswer, (sortingAnswer) => sortingAnswer.question)
  sortingAnswers: SortingAnswer[];
}