import * as mongoose from 'mongoose';
export interface IInventory extends Document {
    readonly branch_office_id: mongoose.Types.ObjectId;
    readonly inventory: IInventoryItem[];

}

interface IInventoryItem {
    readonly product_id: mongoose.Types.ObjectId,
    readonly quantity: number
}