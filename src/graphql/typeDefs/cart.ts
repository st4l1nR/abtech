import { gql } from "apollo-server-micro";

export default gql`
  type Cart {
    _id: ID!
    totalItems: Int!
    subtotal: Float!
    items: [CartItem]!
    discounts: [CartDiscount]!
    currency: CartCurrency!
  }
  type CartItem {
    _id: ID!
    productId:ID!
    name: String!
    quantity: Int!
    price: Float!
    subtotal:Float!
    total: Float!
    variant: Variant
    image: String
  }

  type CartDiscount {
    code: String!
    amount: Float
  }
  type CartCurrency {
    code: String!
    symbol: String!
  }

  extend type Query {
    listCart: [Cart]!
    getCartById(_id: ID!): Cart!
  }

  extend type Mutation {
    createCart: Cart!
    addCartItem(cartId:ID!  productId:ID! variantId:ID quantity:Int! ): Cart!
    updateCartItem(cartId:ID! cartItemId:ID! quantity:Int! ): Cart!
    deleteCartItem(cartId:ID! cartItemId:ID!):Cart!
    deleteCart(_id: ID!): [Cart]!
  }
`;
