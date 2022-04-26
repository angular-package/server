// Get mongo connection.
import connection from '../connect';

// Import schema.
import { usersSchema } from "./users.schema";

/**
 * Users model.
 */
export const usersModel = connection.model("users", usersSchema);
