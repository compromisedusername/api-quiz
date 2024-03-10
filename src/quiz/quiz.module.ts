import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizResolver } from './quiz.resolver';
import { QuizController } from './quiz.controller';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [GraphQLModule.forRoot({
        autoSchemaFile: 'schema.graphql', 
        debug: true,
        playground: true, 
    }),],
    providers: [QuizService, QuizResolver],
    controllers: [QuizController],
})
export class QuizModule {}
