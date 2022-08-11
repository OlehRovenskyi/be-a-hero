import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CONFIGURATION_SERVICE_TOKEN } from '@nestjs/config/dist/config.constants';

console.log(process.env.NODE);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(CONFIGURATION_SERVICE_TOKEN);
  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();
