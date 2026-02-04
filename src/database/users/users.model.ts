// Get mongo connection.
import connection from '../connect';

// Import schema.
import { usersSchema } from "./users.schema";

/**
 * Users model.
 */
export const usersModel = connection.model("users", usersSchema);

// usersModel.create({
//   'email': 'user@example.com',
//   'firstName': 'First',
//   'lastName': 'Last',
//   'password': 'password',
//   'mobile': '1234567890'
// }).then(() => {
//   console.log('Default user created:');
// });