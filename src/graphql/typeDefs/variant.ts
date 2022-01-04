import { gql } from "apollo-server-micro";

export default gql`
  type Variant {
    _id: String!
    productId: ID!
    inventory: Int
    price: Float!
    description: String
    options: [VariantOption!]!
    assets: [String]
    createdAt:Date!
    updatedAt:Date!
  }

  type VariantOption {
    variantGroup:String!
    option:String!
  }
  
  input variantOptionInput {
    variantGroup:String!
    option:String!
  }

  extend type Query {
    listVariant: [Variant]!
    getVariantById(_id: ID!): Variant!
  }
  extend type Mutation {
    createVariant(
      productId: ID!
      inventory: Int
      price: Float
      description: String
      options: [variantOptionInput!]!
      assets: [String]
    ): Variant!
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
