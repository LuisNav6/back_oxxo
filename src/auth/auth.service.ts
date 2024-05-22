import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { IUser } from '../interfaces/user';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<IUser> {
    const user = await this.userService.findByEmail(email);
    if (!user || password != user.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return user;
  }
}
