import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true },
  password: { type: String, required: true },
  rol: { type: String, required: true }
});