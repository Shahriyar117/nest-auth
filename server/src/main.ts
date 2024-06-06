import * as winston from 'winston';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { LogFileOptions } from './common/constants';
import { WinstonModule } from 'nest-winston';

async function bootstrap() {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(LogFileOptions.console),
      new winston.transports.File(LogFileOptions.errorFile),
      new winston.transports.File(LogFileOptions.file),
    ],
    exitOnError: false,
  });

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console(LogFileOptions.console),
        new winston.transports.File(LogFileOptions.errorFile),
        new winston.transports.File(LogFileOptions.file),
      ],
    }),
  });

  app.useGlobalFilters(new HttpExceptionFilter(logger));
  await app.listen(3000);
}
bootstrap();
