import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  email: String,
  tel: String,
  password: String,
  rol: String,
});
