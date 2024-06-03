import { Document, Types } from 'mongoose';

export interface IBranchOffice extends Document {
  readonly name: string;
  readonly location: string;
  readonly CP: string;
  readonly RFC: string;
  readonly tel: string;
}
