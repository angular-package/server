// Users query.
import users from '../users/users.query';

// Provide type Query.
export const queries: string[] = [ users ];

// Export queries.
export default `

# Queries.
${ queries.length === 0 ? `#` : `` } type Query { ${queries.join(``)} }`;
