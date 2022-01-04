import { gql } from "apollo-server-micro";

export default gql`
  type User {
    _id:ID!
    firstName: String!
    lastName: String!
    mail: String!
    password: String!
  }

  extend type Query {
    listUser: [User]!
    getUserById(_id:ID!): User!
  }

  extend type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      mail: String!
      password: String!
    ): User!
    updateUser(_id:ID! password:String): User!
    deleteUser(_id:ID!): Boolean
  }
`;
