// gql.
import { gql } from "apollo-server-express";

// Types.
import types from "./types/types.type";

// Queries.
import queries from "./types/queries.type";

// Mutations.
import mutations from "./types/mutations.type";

// Subscriptions.
import subscriptions from "./types/subscriptions.type";

// Preparation.
const typeDefs = [
	types,
	mutations,
	queries,
	subscriptions
]

/* Construct a schema, using GraphQL schema language */
console.log(`--------------------------------------------------------------------------------`)
console.log(`

# Type.
${typeDefs.join(``)}

`);

export default gql`${typeDefs.join(``)}`;
