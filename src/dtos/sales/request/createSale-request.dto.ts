import { IsArray, IsNotEmpty, IsString, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class SaleItemDto {
  @IsNotEmpty()
  @IsString()
  product_id: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class CreateSaleDto {
  @IsNotEmpty()
  @IsString()
  branch_office_id: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  products: SaleItemDto[];

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsString()
  seller: string;
}
