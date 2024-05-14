import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    try {
      const user = await this.authService.validateUser(email, password);
      return { message: 'Login exitoso', user };
    } catch (error) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }
}
