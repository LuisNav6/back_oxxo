import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';
export class updateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsDecimal()
  readonly price: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly photo: string;
  }
  