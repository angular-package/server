// Interface.
import { SignUpArgs } from './interface/sign-up-args.interface';

// Database.
import { db } from '../../../database/db';
/**
 * Sign up mutation.
 */
export default {
  signUp(root, args: SignUpArgs, context: { db: typeof db }): Promise<{ token: string }> {
    const users = new context.db.users();
    return new Promise((resolve, reject) => {
      users.findOne({ email: args.email })
        .then(
          (result) => result !== null
            // Already exists.
            ? reject(new Error('Email already exists'))
            // Add user.
            : new context.db.users(args).save().then((user) => resolve({ token: 'the-token' })),
          (reason) => console.log(reason)
        );
    });
  },
};
