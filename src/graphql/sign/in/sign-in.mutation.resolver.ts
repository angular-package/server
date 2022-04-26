
import { SignInArgs } from './interface/sign-in-args.interface';
import { db } from '../../../database/db';

export default {
  signIn(root, args: SignInArgs, context: { db: typeof db }): Promise<{ token: string }> {
    // Sign asynchronously
    return new Promise((resolve, reject) => {

      const users = new context.db.users();
      users.findOne({ email: args.email, password: args.password })
        .then(
          (result) => result !== null
            // Resolve token.
            ? resolve({ token: 'the-token' })
            // Bad credentials.
            : reject('Bad credentials'),
          (reason) => console.log(reason)
        );
    });
  },
};
