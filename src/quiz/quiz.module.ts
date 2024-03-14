import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizResolver } from './quiz.resolver';
import { QuizController } from './quiz.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { TeacherQuizController } from 'src/teacher-quiz/teacher-quiz.controller';
import { StudentQuizController } from 'src/student-quiz/student-quiz.controller';

@Module({
    imports: [GraphQLModule.forRoot({
        autoSchemaFile: 'schema.graphql', 
        debug: true,
        playground: true, 
    }),],
    providers: [QuizService, QuizResolver],
    controllers: [QuizController, TeacherQuizController, StudentQuizController],
})
export class QuizModule {}
