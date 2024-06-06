import { path } from 'app-root-path';

export const LogFileOptions = {
  file: {
    level: 'info',
    filename: `${path}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: false,
  },
  errorFile: {
    level: 'error',
    filename: `${path}/logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};
