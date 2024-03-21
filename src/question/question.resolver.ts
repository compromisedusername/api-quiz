import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { Question } from './../entities/question.entity';
import { CreateQuestionInput } from './../dto/question/createquestion.input';
import { UpdateQuestionInput } from './../dto/question/updatequestion.input';
import { NotFoundException } from '@nestjs/common'; // Import for error handling
import { QuestionDto } from 'src/dto/question/question.dto';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => [Question], { name: 'questions' })
  async findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Query(() => Question, { name: 'question' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Mutation(() => QuestionDto) // Return specific DTO
  async createQuestion(
    @Args('createQuestionInput') createQuestionInput: CreateQuestionInput,
  ): Promise<QuestionDto> {
    return this.questionService.create(createQuestionInput);
  }

  @Mutation(() => QuestionDto, { nullable: true }) // Allow null for non-existent update case
  async updateQuestion(
    @Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput,
  ): Promise<QuestionDto> {
    const id = updateQuestionInput.id; // Access the `id` from the input
    const existingQuestion = await this.questionService.findOne(id);
    if (!existingQuestion) {
      throw new NotFoundException('Question not found');
    }
    return this.questionService.update(id, updateQuestionInput);
  }

  @Mutation(() => Question)
  async deleteQuestion(@Args('id', { type: () => Int }) id: number): Promise<Question> {
    return this.questionService.delete(id);
  }
}