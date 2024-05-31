import * as mongoose from 'mongoose';
const { Schema } = mongoose;

const SaleItemSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true }
});

export const SaleSchema = new Schema({
  products: [SaleItemSchema],
  branch_office_id: { type: Schema.Types.ObjectId, required: true },
  sale_date: { type: Date, required: true },
  total: { type: Schema.Types.Decimal128, required: true },
  seller: { type: String, required: true },
});
