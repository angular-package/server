import { db } from '../../database/db';

export default {
  async users(root, args = {}, context: { db: typeof db }, rootValue) {
    return await new context.db.users().find(args);
  }
};
