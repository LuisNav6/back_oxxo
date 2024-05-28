import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';
import { Types } from 'mongoose';

export class UserPasswordLessDto {
  @IsString()
  _id: Types.ObjectId;

  @IsString()
  name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber(null)  // Utiliza 'null' para aceptar cualquier número de teléfono
  tel: string;

  @IsString()
  password: string;

  @IsString()
  rol: string;

  @IsString()  // Otras validaciones pueden ser agregadas si es necesario
  branch_id: Types.ObjectId;
}
