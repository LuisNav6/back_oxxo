// interfaces/branch-office.ts
import { Document, Types } from 'mongoose';

export interface IBranchOffice extends Document {
  name: string;
  dirección: string;
  CP: string;
  RFC: string;
  tel: string;
  admin: Types.ObjectId;
}
