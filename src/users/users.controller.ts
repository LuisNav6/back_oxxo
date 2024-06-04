import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, UseGuards } from '@nestjs/common'; // Importa Put y Delete para manejar las rutas de actualización y eliminación
import { UserService } from './users.service';
import { CreateUserDto } from '../dtos/users/request/createUsers-request.dto';
import { UpdateUserDto } from '../dtos/users/request/updateUser-request.dto'; // Asegúrate de importar correctamente el DTO de actualización
import { IUser } from '../interfaces/user';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('create-account')
  @Roles(Role.SOPORTE)
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<IUser> {
    return this.userService.findById(id);
  }

  @Put(':id')
  @Roles(Role.SOPORTE)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
    try {
      return this.userService.update(id, updateUserDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Delete(':id')
  @Roles(Role.SOPORTE)
  async delete(@Param('id') id: string): Promise<void> {
    try {
      await this.userService.delete(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
