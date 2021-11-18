import { gql } from "apollo-server-micro";

export default gql`
  type Discount {
    _id: String!
    code: String!
    type: DiscountType!
    value: Int!
    startsOn: Date!
    endsOn: Date
    isExpired: Boolean!
    limitQuantity: Int
    currentQuantity: Int!
    products: [Product!]!
  }

  enum DiscountType {
    percentage
    number
  }

  extend type Query {
    listDiscount: [Discount]!
    getDiscountById(_id: ID!): Discount!
  }
  extend type Mutation {
    createDiscount(
      code: String!
      type: DiscountType!
      value: Int!
      startsOn: Date!
      endsOn: Date
      limitQuantity: Int
      products: [String]
    ): [Discount]!
    updateDiscount(
      _id: ID!
      code: String
      type: DiscountType
      value: Int
      startsOn: Date
      endsOn: Date
      limitQuantity: Int
      products: [String]
    ): [Discount!]!
    deleteDiscount(_id: ID!): [Discount]!
  }
`;
