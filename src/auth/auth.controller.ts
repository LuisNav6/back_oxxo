import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserPasswordLessDto } from 'src/dtos/jwt/request/UserPasswordLess.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() userpasswordless: UserPasswordLessDto) {
    try {
      const user = await this.authService.validateUser(userpasswordless.email, userpasswordless.password);

      const token = await this.authService.login(user);

      return {
        message: 'Login exitoso', user: {
          _id: user._id,
          name: user.name,
          last_name: user.last_name,
          email: user.email,
          tel: user.tel,
          rol: user.rol,
          branch_id: user.branch_id,
        },
        ...token  // Esto incluye el access_token
      };

    } catch (error) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }
}
