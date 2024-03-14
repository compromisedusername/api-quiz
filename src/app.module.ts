import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { QuizResolver } from './quiz/quiz.resolver';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { StudentQuizController } from './student-quiz/student-quiz.controller';
import { TeacherQuizController } from './teacher-quiz/teacher-quiz.controller';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: 'schema.graphql', 
    debug: true,
    playground: true, 
}),
    UserModule,
    QuizModule,
  ],
  controllers: [AppController, StudentQuizController, TeacherQuizController],
  providers: [AppService, QuizResolver],
})
export class AppModule {}
