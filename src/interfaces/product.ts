import { Decimal128, Document, Types } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly price: Decimal128;
  readonly description: string;
  readonly photo: string;
  
}
