import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
});