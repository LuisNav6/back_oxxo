import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { InventoryArrayDto } from './createInventory-request.dto';

export class UpdateInventoryDto {

  @IsNotEmpty()
  @IsString()
  readonly branch_office_id: string;

  @IsNotEmpty()
  @IsArray()
  readonly inventory_id: InventoryArrayDto;
 
}
