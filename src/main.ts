import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap'); // Create a logger instance
  const app = await NestFactory.create(AppModule);

  app.useLogger(logger); // Use the logger instance
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  logger.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
