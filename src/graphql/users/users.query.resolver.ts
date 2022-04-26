import { db } from '../../database/db';

export default {
  users(root, args = {}, context: { db: typeof db }, rootValue) {
    return new context.db.users().find(args);
  }
};
