import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { QuizResolver } from './quiz/quiz.resolver';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'true',//autoSchemaFile: 'schema.graphql',  
      typePaths: ['./**/*.graphql'],
    }),
    UserModule,
    QuizModule,
  ],
  controllers: [AppController],
  providers: [AppService, QuizResolver],
})
export class AppModule {}