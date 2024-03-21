import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  var port = 3001
  await app.listen(port).then(({ url }) => {
    console.log(`Ready at ${url}`);
  });
}
bootstrap();
