// Get mutations as Mutation.
import Mutation from "./resolvers/mutation.resolver";

// Get queries as Query.
import Query from "./resolvers/query.resolver";

// Get mutations type to get length.
import { mutations } from "./types/mutations.type";

// Get queries type to get length.
import { queries } from "./types/queries.type";

/**
 * Export resolvers.
 */
export default {
  ...mutations.length > 0 ? { Mutation }: {},
  ...queries.length > 0 ? { Query } : {}
};
