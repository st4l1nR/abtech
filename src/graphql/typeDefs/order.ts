import { gql } from "apollo-server-micro";

export default gql`
  type Order {
    _id:ID!
    status: OrderStatus!
    custormer: OrderCustomer!
    shipping: OrderShipping!
    cart: Cart!
    createdAt:Date!
    updatedAt:Date!
  }

  type OrderCustomer {
    email: String!
  }

  type OrderShipping {
    name: String!
    street: String!
    city: String!
    country: String!
    zip: String!
  }


  enum OrderStatus {
    fullfilled
    notfullfilled
  }

  input orderCustomerInput {
    email: String!
  }

  input orderShippingInput {
    name: String!
    country: String!
    state: String!
    city: String
    street: String!
    zip: String
  }

  extend type Query {
    listOrder: [Order]!
    getOrderById(_id: ID!): Order!
  }

  extend type Mutation {
    createOrder(
      customer: orderCustomerInput!
      shipping: orderShippingInput!
      cart: ID!
    ): Order!
    updateOrder(_id:ID! status:String):Order!
    deleteOrder(_id:ID!):[Order]!
  }
`;
