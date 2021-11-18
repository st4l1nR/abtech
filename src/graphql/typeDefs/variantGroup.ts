import { gql } from "apollo-server-micro";

export default gql`
  type VariantGroup {
    _id: ID!
    name: String!
    options: [VariantGroupOption!]!
    asstes: [String]!
    productId: String!
  }

  type VariantGroupOption {
    _id: ID!
    name: String
    price: Float
  }

  input variantGroupOptionInput {
    name: String!
    price: Float
  }

  extend type Query {
    listVariantGroup: [VariantGroup]!
    getVariantGroupById(_id: ID!): VariantGroup!
  }
  extend type Mutation {
    createVariantGroup(
      name: String!
      options: variantGroupOptionInput!
      asstes: [String]
      productId: ID!
    ): [VariantGroup]!
    updateVariantGroup(
      _id: ID!
      name: String
      options: variantGroupOptionInput
      asstes: [String]
      productId: ID
    ): [VariantGroup!]!
    deleteVariantGroup(_id: ID!): [VariantGroup]!
  }
`;
