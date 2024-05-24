import * as mongoose from 'mongoose';
import { InventoryController } from 'src/inventory/inventory.controller';
export interface IInventory extends Document {

    //especificar los campos
    readonly branch_office_id: mongoose.Types.ObjectId;
    readonly inventory: IInventoryItem[];

}

interface IInventoryItem {

    readonly product_id: mongoose.Types.ObjectId,
    readonly quantity: number
}