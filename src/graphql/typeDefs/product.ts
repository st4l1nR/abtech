import { gql } from "apollo-server-micro";

export default gql`
  type Product {
    _id: ID!
    name: String!
    description: String
    price: Float!
    inventory: Inventory!
    conditionals: Conditionals!
    image: String
    assets: [String]!
    sales:Int!
    variantGroups: [VariantGroup]!
    variants:[Variant]!
    shippingMethods: [ShippingMethod]!
    categories: [Category]!
    relatedProducts: [Product]!
    discount:Discount
    createdAt:Date
    updatedAt:Date
  }

  type Inventory {
    managed: Boolean!
    avaible: Int
  }

  type Conditionals {
    isActive: Boolean!
    isInventoryManaged: Boolean!
    isSoldOut: Boolean!
    hasImages: Boolean!
  }

  input inventoryInput {
    managed: Boolean!
    avaible: Int
  }

  input conditionalsInput {
    isActive: Boolean!
    isInventoryManaged: Boolean
    hasImages: Boolean
  }

  extend type Query {
    listProduct: [Product]!
    getProductById(_id: ID!): Product!
  }

  extend type Mutation {
    createProduct(
      name: String!
      description: String
      price: Float!
      inventory: inventoryInput!
      conditionals: conditionalsInput!
      image: String
      assets: [String]
      shippingMethods: [ID!]!
      categories: [ID]
      relatedProducts: [ID]
      discount:ID
    ): Product!
    updateProduct(
      _id:ID!
      name: String
      description: String
      price: Float
      inventory: inventoryInput
      conditionals: conditionalsInput
      image: String
      assets: [String]
      shippingMethods: [ID]
      categories: [ID]
      relatedProducts:[ID]
      discount:ID
    ): Product!
    deleteProduct(_id: ID!): [Product]!
  }
`;
