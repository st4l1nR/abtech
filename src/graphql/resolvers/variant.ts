import * as types from "../../types";

export const variantQueries = {
  listVariant: async (parent: any, args: any, { models }) => await
    models.variant.find({}),
  getVariantById: async (parent: any, { _id }: any, { models }) => await
    models.variant.findOne({ _id }),
};

export const variantMutations = {
  createVariant: async (
    parent: any,
    { price, ...args }: types.createVariantInput,
    { models }
  ) => {
    const { productId, options } = args;

    const product:types.Product = await models.product.findOne({_id:productId})


    const isDuplicate:types.Variant[] = 
      await models.variant.find({
        options: { $all: options.map((option) => ({ $elemMatch: option })) },
      })
    ;
    if (Boolean(isDuplicate[0])) throw "This variant already exist"

    const newVariant = new models.variant({
      price: price ? price : product.price,
      ...args,
    });
    return await newVariant.save();
  },
  updateVariant: async (parent: any, { _id, ...args }: types.updateVariantInput, { models }) =>
    await models.variant.findOneAndUpdate({ _id }, args, { new: true }),
  deleteVariant: async (parent: any, { _id }: any, { models }) => {
    await models.variant.deleteOne({ _id });
    return await models.variant.find({});
  },
};
