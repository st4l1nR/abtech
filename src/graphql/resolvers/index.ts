import * as types from "../../types";
import { productQueries, productMutations } from "./product";
import { variantQueries, variantMutations } from "./variant";
import { categoryQueries, categoryMutations } from "./category";
import {
  shippingMethodQueries,
  shippingMethodMutations,
} from "./shippingMethod";
import { discountQueries, discountMutations } from "./discount";
import { GraphQLScalarType, Kind } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Date: dateScalar,
  Product: {
    variants: async ({ _id }: types.Product, args: any, { models }: any) =>
      await models.variant.find({ productId: _id }),
    conditionals: {
      isSoldOut: async (parent: types.Product, args: any, { models }: any) => {
        const isSoldOut = parent.sales > parent.inventory.avaible;
        await models.product.updateOne({ _id: parent._id }, { isSoldOut });
        return isSoldOut;
      },
    },
  },
  Category: {
    children: async ({ _id }: types.Category, args: any, { models }: any) => {
      return await models.category.find({
        parent: { _id: _id },
      });
    },
    products: async ({ _id }: types.Category, args: any, { models }: any) =>
      models.product
        .find({ categories: { $in: [_id] } })
        .populate(["shippingMethods", "categories", "relatedProducts"]),
  },
  Query: {
    ...productQueries,
    ...variantQueries,
    ...categoryQueries,
    ...shippingMethodQueries,
    ...discountQueries,
  },
  Mutation: {
    ...productMutations,
    ...variantMutations,
    ...categoryMutations,
    ...shippingMethodMutations,
    ...discountMutations,
  },
};

export default resolvers;
