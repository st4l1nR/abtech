import { gql } from "apollo-server-micro";

export default gql`
  type Variant {
    _id: String!
    inventory: Int!
    price: Float!
    description: String
    options: [VariantOption!]!
    asstes: [String]
    productId: ID!
  }

  type VariantOption {
    variantGroupId:ID!
    variantGroupOptionId:ID!
  }
  
  input variantOptionInput {
    variantGroupId:ID!
    variantGroupOptionId:ID!
  }

  extend type Query {
    listVariant: [Variant]!
    getVariantById(_id: ID!): Variant!
  }
  extend type Mutation {
    createVariant(
      inventory: Int
      price: Float
      description: String
      options: [variantOptionInput!]!
      assets: [String]
      productId: ID!
    ): [Variant]!
    updateVariant(
      _id: ID!
      inventory: Int
      price: Float
      description: String
      assets: [String]
    ): Variant!
    deleteVariant(_id: ID!): [Variant]!
  }
`;
