import {productQueries, productMutations} from './product'
import {variantGroupQueries, variantGroupMutations} from './variantGroup'
import {variantQueries, variantMutations} from './variant'
import {categoryQueries, categoryMutations} from './category'
import {shippingMethodQueries, shippingMethodMutations} from './shippingMethod'
import {discountQueries, discountMutations} from './discount'
import { GraphQLScalarType, Kind } from 'graphql';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
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
    Date:dateScalar,
    Query: {
      ...productQueries,
      ...variantGroupQueries,
      ...variantQueries,
      ...categoryQueries,
      ...shippingMethodQueries,
      ...discountQueries
    },
    Mutation: {
      ...productMutations,
      ...variantGroupMutations,
      ...variantMutations,
      ...categoryMutations,
      ...shippingMethodMutations,
      ...discountMutations
    },
  };
  
  export default resolvers;
  