import * as types from "../../types";
import models from "../../models";
import type { IResolvers } from "@graphql-tools/utils";
import { merchantQueries, merchantMutations } from "./merchant";
import { userQueries, userMutations } from "./user";
import { productQueries, productMutations } from "./product";
import { variantGroupQueries, variantGroupMutations } from "./variantGroup";
import { variantQueries, variantMutations } from "./variant";
import { categoryQueries, categoryMutations } from "./category";
import { cartQueries, cartMutations } from "./cart";
import { orderQueries, orderMutations } from "./order";
import {
  shippingMethodQueries,
  shippingMethodMutations,
} from "./shippingMethod";
import { discountQueries, discountMutations } from "./discount";
import { dateScalar } from "./scalars";

type Context = {
  models: typeof models;
};

const resolvers = {
  Date: dateScalar,
  Product: {
    variantGroups: async (
      { _id }: types.Product,
      args: any,
      { models }: any
    ) => {
      const variantGroups: types.VariantGroup[] =
        await models.variantGroup.find({ productId: _id });
      await models.product.updateOne(
        { _id },
        { variantGroups: variantGroups.map((variantGroup) => variantGroup._id) }
      );
      return variantGroups;
    },
    variants: async ({ _id }: types.Product, args: any, { models }: any) => {
      const variants: types.Variant[] = await models.variant.find({
        productId: _id,
      });
      await models.product.updateOne(
        { _id },
        { variants: variants.map((variant) => variant._id) }
      );
      return variants;
    },
    conditionals: {
      isSoldOut: async (parent: types.Product, args: any, { models }: any) => {
        const isSoldOut = parent.inventory.managed
          ? Boolean(parent.sales > parent.inventory.avaible)
          : false;
        await models.product.updateOne({ _id: parent._id }, { isSoldOut });
        return isSoldOut;
      },
      isInventoryManaged: async (
        { _id, inventory }: types.Product,
        args: any,
        { models }: any
      ) => {
        const isInventoryManaged = Boolean(inventory.managed);
        await models.product.updateOne(
          { _id },
          { conditionals: { isInventoryManaged } }
        );
        return isInventoryManaged;
      },
      hasImages: async (
        { _id, assets }: types.Product,
        args: any,
        { models }: any
      ) => {
        const hasImages = Boolean(assets);
        await models.product.updateOne(
          { _id },
          { conditionals: { hasImages } }
        );
        return hasImages;
      },
    },
    discount: async ({ _id }: types.Product, args: any, { models }: any) => {
      const discount: types.Discount = await models.discount.findOne({
        products: { $in: [_id] },
      });
      await models.product.updateOne({ _id }, discount._id);
      return discount;
    },
  },
  Category: {
    children: async ({ _id }: types.Category, args: any, { models }: any) => {
      const childrens: types.Category[] = await models.category.find({
        parent: _id,
      });
      await models.category.updateOne(
        { _id },
        { childrens: childrens.map((children) => children._id) }
      );
      return childrens;
    },
    products: async ({ _id }: types.Category, args: any, { models }: any) =>
      await models.product
        .find({ categories: { $in: [_id] } })
        .populate(["shippingMethods", "categories", "relatedProducts"]),
  },
  Query: {
    ...merchantQueries,
    ...userQueries,
    ...productQueries,
    ...variantGroupQueries,
    ...variantQueries,
    ...categoryQueries,
    ...shippingMethodQueries,
    ...discountQueries,
    ...cartQueries,
    ...orderQueries,
  },
  Mutation: {
    ...merchantMutations,
    ...userMutations,
    ...productMutations,
    ...variantGroupMutations,
    ...variantMutations,
    ...categoryMutations,
    ...shippingMethodMutations,
    ...discountMutations,
    ...cartMutations,
    ...orderMutations,
  },
};

export default resolvers;
