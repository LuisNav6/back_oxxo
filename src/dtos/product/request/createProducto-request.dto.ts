import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly photo: string;

  constructor(name: string, price: number, description: string, photo: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.photo = photo;
  }
}
