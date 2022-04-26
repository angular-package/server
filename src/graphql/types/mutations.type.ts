// Sign in.
import signIn from "../sign/in/sign-in.mutation";

// Sign up.
import signUp from "../sign/up/sign-up.mutation";

// Provide mutations to Array.
export const mutations = [ signIn, signUp ];

// Export mutations types.
export default `

# Mutations.
${mutations.length === 0 ? `#` : ``} type Mutation { ${mutations.join(``)} }`;
