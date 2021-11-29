import * as types from "../../types";

export const productQueries = {
  listProduct: async (parent: any, args: any, { models }) => {
    return await models.product
      .find({})
      .populate([
        "shippingMethods",
        "categories",
        "relatedProducts",
      ]);
  },
  getProductById: async (parent: any, { _id }: any, { models }) => {
    return await models.product
      .findOne({ _id })
      .populate([
        "shippingMethods",
        "categories",
        "relatedProducts",
      ]);
  },
};

export const productMutations = {
  createProduct: async (parent: any, args: types.productInput, { models }) => {
    const newProduct = new models.product(args);
    await newProduct.save();
    return await models.product
      .find({})
      .populate([
        "shippingMethods",
        "categories",
        "relatedProducts",
      ]);
  },
  updateProduct: async (parent: any, { _id, ...args }: any, { models }) => {
    return await models.product
      .findOneAndUpdate({ _id }, args, { new: true })
      .populate([
        "shippingMethods",
        "categories",
        "relatedProducts",
      ]);
  },
  deleteProduct: async (parent: any, { _id }: any, { models }) => {
    await models.product.deleteOne({ _id });
    return await models.product
      .find({})
      .populate([
        "shippingMethods",
        "categories",
        "relatedProducts",
      ]);
  },
};
