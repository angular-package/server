// Mongoose.
import mongoose from 'mongoose';

// Users shape.
import { UsersShape } from './users.interface';

/**
 * Users schema.
 */
export const usersSchema: mongoose.Schema<UsersShape> = new mongoose.Schema({
  email: String,
  mobile: String,
  firstName: String,
  lastName: String,
  password: String,
});
