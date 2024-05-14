import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly tel: string;

  @IsNotEmpty()
  @IsString()
  readonly rol: string;
}
