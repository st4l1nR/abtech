import { gql } from "apollo-server-micro";

export default gql`
  type ShippingMethod {
    _id: ID!
    name: String!
    price: Float!
    zones: [ShippingMethodZone!]!
  }

  type ShippingMethodZone {
    country: String!
    regions: [String!]!
  }

  input shippingMethodZoneInput {
    country: String!
    regions: [String!]!
  }

  extend type Query {
    listShippingMethod: [ShippingMethod]!
    getShippingMethodById(_id: ID!): ShippingMethod!
  }
  extend type Mutation {
    createShippingMethod(
      name: String!
      price: Float!
      zones: [shippingMethodZoneInput!]!
    ): [ShippingMethod]!
    updateShippingMethod(
      _id: ID!
      name: String
      price: Float
      zones: [shippingMethodZoneInput]
    ): [ShippingMethod!]!
    deleteShippingMethod(_id: ID!): [ShippingMethod]!
  }
`;
