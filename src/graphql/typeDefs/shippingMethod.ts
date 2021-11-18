import { gql } from "apollo-server-micro";

export default gql`
  type ShippingMethod {
    _id: ID!
    name: String!
    price: Float!
    countries: [String!]!
    regions: ShippingMethodRegions!
  }

  type ShippingMethodRegions {
    String:String
  }

  input shippingMethodRegionsInput {
    String:String
  }

  extend type Query {
    listShippingMethod: [ShippingMethod]!
    getShippingMethodById(_id: ID!): ShippingMethod!
  }
  extend type Mutation {
    createShippingMethod(
      name: String!
      price: Float!
      countries: [String!]!
      regions: shippingMethodRegionsInput!
    ): [ShippingMethod]!
    updateShippingMethod(
      _id: ID
      name: String
      price: Float
      countries: [String!]
      regions: shippingMethodRegionsInput
    ): [ShippingMethod!]!
    deleteShippingMethod(_id: ID!): [ShippingMethod]!
  }
`;
