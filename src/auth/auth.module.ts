import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Asegúrate de importar el módulo de usuarios

@Module({
  imports: [UsersModule], // Importa el módulo de usuarios aquí
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
