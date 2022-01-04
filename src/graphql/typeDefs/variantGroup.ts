import { gql } from "apollo-server-micro";

export default gql`
  type VariantGroup {
    _id: ID!
    name: String!
    options: [String!]!
    assets: [String]
    productId: String!
    createdAt:Date!
    updatedAt:Date!
  }


  extend type Query {
    listVariantGroup: [VariantGroup]!
    getVariantGroupById(_id:ID!): VariantGroup
  }

  extend type Mutation {
    createVariantGroup(
      name: String!
      options: [String!]!
      assets: String
      productId: ID!
    ): [VariantGroup!]!
    updateVariantGroup(
      _id:ID!
      name: String
      options: [String!]
      assets: String
    ): [VariantGroup!]!
    deleteVariantGroup(_id: ID!): [VariantGroup]!
  }
`;
