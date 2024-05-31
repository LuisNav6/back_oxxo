import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsNotEmpty()
  @IsString()
  readonly branch_office_id: string;

  @IsNotEmpty()
  @IsArray()
  readonly inventory: InventoryArrayDto[];

}

export class InventoryArrayDto{

  @IsNotEmpty()
  @IsString()
  readonly product_id: string;

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number;
}