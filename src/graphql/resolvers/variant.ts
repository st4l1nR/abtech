import * as types from '../../types'

export const variantQueries = {
  listVariant: async (parent: any, args: any, { models }) =>
    models.variant.find({}),
  getVariantById: async (parent: any, { _id }: any, { models }) =>
    models.variant.findOne({ _id }),
};

export const variantMutations = {
  createVariant: async (parent: any, {price, ...args}: any, { models }) => {
    const product:types.Product = await models.product.findOne({_id:args.productId})
    const newVariant = new models.variant({
      price:price ? price : product.price,
      ...args
    });
    return await newVariant.save();
  },
  updateVariant: async (parent: any, { _id, ...args }: any, { models }) =>
    await models.variant.findOneAndUpdate({ _id }, args, { new: true }),
  deleteVariant: async (parent: any, {_id}: any, { models }) => {
      await models.variant.deleteOne({_id})
      return await models.variant.find({})
  },
};
