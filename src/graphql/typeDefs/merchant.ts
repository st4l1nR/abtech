import { gql } from "apollo-server-micro";

export default gql`
  # Types
  type Merchant {
    _id:ID!
    email: String
    adress: MerchantAdress
    currency: MerchantCurrency
  }

  type MerchantAdress {
    country: String!
    state: String!
    city: String!
    street: String!
    zip: String!
  }
  type MerchantCurrency {
    code: String!
    symbol: String!
  }
  # Inputs
  input merchantAdressInput {
    country: String!
    state: String!
    city: String!
    street: String!
    zip: String!
  }

  input merchantCurrencyInput {
    code: String
    symbol: String
  }

  extend type Query {
    getMerchant: Merchant!
  }

  extend type Mutation {
    createMerchant(
      email: String
      adress: merchantAdressInput
      currency: merchantCurrencyInput
    ): Merchant!
    updateMerchant(
      _id: ID!
      email: String
      adress: merchantAdressInput
      currency: merchantCurrencyInput
    ): Merchant!
  }
`;
