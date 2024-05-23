// branch_offices.model.ts
import * as mongoose from 'mongoose';

export const BranchOfficeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dirección: { type: String, required: true },
  CP: { type: String, required: true },
  RFC: { type: String, required: true },
  tel: { type: String, required: true },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});
