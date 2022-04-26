
export default `
  # get users from mongoose by firstName, id or lastName
  users(
    email: String,
    mobile: String,
    firstName: String,
    lastName: String
  ): [User]
`;
