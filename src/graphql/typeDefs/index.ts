import { gql } from "apollo-server-micro";
import merchant from './merchant'
import user from './user'
import product from "./product";
import variantGroup from "./variantGroup";
import variant from "./variant";
import category from "./category";
import shipping from "./shippingMethod";
import discount from "./discount";
import cart from "./cart";
import order from "./order";

const link = gql`
  scalar Date
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean,
  }
`;
export default [
  link,
  merchant,
  user,
  product,
  variantGroup,
  variant,
  category,
  shipping,
  discount,
  cart,
  order,
];
