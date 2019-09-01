import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create Swagger options.
  const swaggerOptions = new DocumentBuilder().setTitle('Data Service').build();

  // Create Swagger document (with HTTP routes).
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);

  // Serve Swagger.
  SwaggerModule.setup('api', app, swaggerDocument);

  // Enable global request validation.
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
