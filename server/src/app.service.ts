import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(user: string): string {
    return `Welcome ${user}`;
  }
}
