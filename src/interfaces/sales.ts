import * as mongoose from 'mongoose';

export interface ISale extends mongoose.Document {
  readonly products: ISaleItem[];
  readonly branch_office_id: mongoose.Types.ObjectId;
  readonly sale_date: Date;
  readonly total: mongoose.Types.Decimal128;
  readonly seller: string;
}

interface ISaleItem {
  readonly product_id: mongoose.Types.ObjectId;
  readonly quantity: number;
}
