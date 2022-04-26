// Sign in.
import signIn from '../sign/in/sign-in.mutation.resolver';

// Sign up.
import signUp from "../sign/up/sign-up.mutation.resolver";

/**
 * Export mutation resolvers.
 */
export default { ...{},
  ...signIn,
  ...signUp,
};
