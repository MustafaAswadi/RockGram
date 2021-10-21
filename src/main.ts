/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import { AuthService } from './auth/auth.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
  .setTitle('RockGram')
  .setDescription('Chat Application')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app,document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
