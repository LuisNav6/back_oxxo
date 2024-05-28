import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { IUser } from '../interfaces/user';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UserPasswordLessDto } from 'src/dtos/jwt/request/UserPasswordLess.dto';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<IUser> {
    const user = await this.userService.findByEmail(email);
    if (!user || password != user.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return user;
  }
  
  async login(user: UserPasswordLessDto) {
    const payload = {
      sub: user._id,
      name: user.name,
      last_name: user.last_name,
      email: user.email,
      tel: user.tel,
      rol: user.rol,
      branch_id: user.branch_id,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

}
