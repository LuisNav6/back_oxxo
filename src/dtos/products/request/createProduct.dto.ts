import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsDecimal()
  readonly price: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
  }
  