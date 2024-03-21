import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { QuizResolver } from './quiz/quiz.resolver';
import { QuizModule } from './quiz/quiz.module';
import { StudentQuizController } from './student-quiz/student-quiz.controller';
import { TeacherQuizController } from './teacher-quiz/teacher-quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { QuizService } from './quiz/quiz.service';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true, 
    introspection: true,
    playground: true, 
}),
TypeOrmModule.forRoot({
  keepConnectionAlive: true,
  type: 'postgres', 
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, 
}),

    QuizModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
