import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.singin(signInDto.email, signInDto.password);
  }
}
