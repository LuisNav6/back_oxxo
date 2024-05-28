import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Asegúrate de importar el módulo de usuarios
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { jwtConstants } from './constants/jwt.constants';
import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [UsersModule, 
    JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '1d' },
  }),], // Importa el módulo de usuarios aquí
  providers: [AuthService, AuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
