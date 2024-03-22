import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './question.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;
  @Field(() => String)

  @Field(() => String)
  @Column()
  name: string;

  @Field(()=>[Question])
  @OneToMany(() => Question, (question) => question.quizId)
  questions: Question[];
}