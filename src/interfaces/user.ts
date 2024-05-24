import * as mongoose from 'mongoose';
export interface IUser extends Document{
    readonly _id: mongoose.Types.ObjectId;
    readonly name: string;
    readonly last_name: string;
    readonly email: string;
    readonly tel: string;
    readonly password: string;
    readonly rol: string;
    readonly branch_id: mongoose.Types.ObjectId;
  }
  