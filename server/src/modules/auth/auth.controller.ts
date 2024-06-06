import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() body: { username: string; email: string; password: string },
  ): Promise<User> {
    try {
      const user = await this.authService.signUp(
        body.username,
        body.email,
        body.password,
      );
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}