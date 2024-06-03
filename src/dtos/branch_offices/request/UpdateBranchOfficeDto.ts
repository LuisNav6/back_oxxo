import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UpdateBranchOfficeDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly location: string;

  @IsNotEmpty()
  @IsString()
  readonly CP: string;

  @IsNotEmpty()
  @IsString()
  readonly RFC: string;
  
  @IsNotEmpty()
  @IsString()
  readonly tel: string;
  }
  