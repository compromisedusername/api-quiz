import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Answer } from './answer.entity';
import { SortingAnswer } from './sortinganswer.entity';
import { QuestionType } from './question.enum';
import { Field, Int } from '@nestjs/graphql';




@Entity()
export class Question {
  
  @PrimaryGeneratedColumn()
  id: number;

 
  @Column()
  @Field(()=>String)
  text: string;

  /* @Column({
    type: 'enum',
    enum: QuestionType,
  }) */
  @Column()
  @Field(type => String)
  questionType: string;

  @Field(()=>Int)
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quizId: number;

  @Field(()=>[Answer])
  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @Field(()=>[SortingAnswer])
  @OneToMany(() => SortingAnswer, (sortingAnswer) => sortingAnswer.question)
  sortingAnswer: SortingAnswer[];
}
