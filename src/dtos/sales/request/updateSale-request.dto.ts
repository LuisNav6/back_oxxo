import { IsArray, IsNotEmpty, IsOptional, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SaleProductDto {
  @IsNotEmpty()
  @IsString()
  product_id: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class UpdateSaleDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleProductDto)
  @IsOptional()
  products?: SaleProductDto[];

  @IsOptional()
  @IsString()
  branch_office_id?: string;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  @IsString()
  seller?: string;
}
