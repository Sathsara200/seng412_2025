/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS so the Angular app (http://localhost:4200) can call the API
  app.enableCors({
    origin: 'http://localhost:4200', // Allow your Angular frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true,
  });

  // ✅ Set a global prefix for all routes
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // ✅ Start the server
  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

