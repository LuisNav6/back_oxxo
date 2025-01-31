import * as mongoose from 'mongoose';
import { IInventory } from '../../interfaces/inventory';
const { Schema } = mongoose;

export const InventorySchema = new Schema<IInventory>({
  branch_office_id: { type: Schema.Types.ObjectId, required: true },
  inventory: [{
    product_id: { type: Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true }
  }],
});

