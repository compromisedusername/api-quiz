import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { QuizResolver } from './quiz/resolvers/quiz.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, QuizResolver],
})
export class AppModule {}
