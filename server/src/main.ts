import * as winston from 'winston';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { LogFileOptions } from './common/constants';
import { WinstonModule } from 'nest-winston';
import helmet from 'helmet';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

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

  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  };

  app.enableCors(corsOptions);

  app.useGlobalFilters(new HttpExceptionFilter(logger));

  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
