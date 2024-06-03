import * as mongoose from 'mongoose';

export const BranchOfficeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  CP: { type: String, required: true },
  RFC: { type: String, required: true },
  tel: { type: String, required: true }
});
