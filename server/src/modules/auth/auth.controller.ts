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
    const user = await this.authService.signUp(
      body.username,
      body.email,
      body.password,
    );
    return user;
  }

  @Post('signin')
  async signIn(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.signIn(user);
  }
}
