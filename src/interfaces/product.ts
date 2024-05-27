import * as mongoose from 'mongoose';

export interface IProduct extends Document {
  readonly _id: mongoose.Types.ObjectId;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly photo: string;
}
