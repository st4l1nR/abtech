import { gql } from "apollo-server-micro";

export default gql`
  type Category {
    _id: ID!
    parentId: ID
    name: String!
    description: String
    assets: [String]!
    children: [Category]!
    products: [Product!]!
  }

  extend type Query {
    listCategory: [Category]!
    getCategoryById(_id: ID!): Category!
  }
  extend type Mutation {
    createCategory(
      parentId: ID
      name: String!
      description: String
      assets: [String]
      products: [ID!]!
    ): [Category]!
    updateCategory(
      _id: ID!
      parentId: ID
      name: String
      description: String
      assets: [String]
      products: [ID]
    ): [Category!]!
    deleteCategory(_id: ID!): [Category]!
  }
`;
