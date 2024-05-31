import { IsArray, IsDecimal, IsNotEmpty, IsNumber, IsString, isDate } from 'class-validator';

export class CreateSaleDto {
    @IsNotEmpty()
    @IsArray()
    readonly products: SaleArrayDto[];

  @IsNotEmpty()
  @IsString()
  readonly branch_office_id: string;

  @IsNotEmpty()
  @IsString()
  readonly sale_date: String;

  @IsNotEmpty()
  @IsDecimal()
  readonly total: String;

  @IsNotEmpty()
  @IsString()
  readonly seller: string;


}

export class SaleArrayDto{

  @IsNotEmpty()
  @IsString()
  readonly product_id: string;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
}