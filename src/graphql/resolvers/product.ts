import * as types from "../../types";

export const productQueries = {
  listProduct: async (parent: any, args: any, { models }) => {
    return await models.product
      .find({})
      .populate([
        "variantGroups",
        "variants",
        "shippingMethods",
        "categories",
        "relatedProducts",
        "discount",
      ]);
  },
  getProductById: async (parent: any, { _id }: any, { models }) => {
    return await models.product
      .findOne({ _id })
      .populate([
        "variantGroups",
        "variants",
        "shippingMethods",
        "categories",
        "relatedProducts",
        "discount",
      ]);
  },
};

export const productMutations = {
  createProduct: async (
    parent: any,
    args: types.createProductInput,
    { models }
  ) => {
    const newProduct = new models.product(args);
    const { _id }: types.Product = await newProduct.save();
    return await models.product
      .findOne({ _id })
      .populate([
        "variantGroups",
        "variants",
        "shippingMethods",
        "categories",
        "relatedProducts",
        "discount",
      ]);
  },
  updateProduct: async (parent: any, { _id, ...args }: any, { models }) => {
    return await models.product
      .findOneAndUpdate({ _id }, args, { new: true })
      .populate([
        "variantGroups",
        "variants",
        "shippingMethods",
        "categories",
        "relatedProducts",
        "discount",
      ]);
  },
  deleteProduct: async (parent: any, { _id }: any, { models }) => {
    await models.variantGroup.deleteMany({productId:_id})
    await models.variants.deleteMany({productId:_id})
    await models.product.deleteOne({ _id });
    return await models.product
      .find({})
      .populate([
        "variantGroups",
        "variants",
        "shippingMethods",
        "categories",
        "relatedProducts",
        "discount",
      ]);
  },
};
