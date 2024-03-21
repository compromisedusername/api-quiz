import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class SortingAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answerText: string;

  @Column()
  correctOrder: number;

  @ManyToOne(() => Question, (question) => question.sortingAnswer)
  question: Question;
}