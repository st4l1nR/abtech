import * as types from "../../types";

export const variantGroupQueries = {
  listVariantGroup: async (parent: any, args: any, { models }: any) =>
    await models.variantGroup.find({}),
  getVariantGroupById: async (parent: any, { _id }: any, { models }: any) =>
    await models.variantGroup.findOne({ _id }),
};

export const variantGroupMutations = {
  createVariantGroup: async (
    parent: any,
    args: types.createVariantGroupInput,
    { models }: any
  ) => {
    const { productId, name } = args;

    const isRepeat = Boolean(
      await models.variantGroup.findOne({ productId, name })
    );
    if (isRepeat) throw "This variant group already exist";

    const newVariantGroup = new models.variantGroup(args);
    await newVariantGroup.save();
    return await models.variantGroup.find({});
  },
  updateVariantGroup: async (
    parent: any,
    { _id, ...changes }: types.updateVariantGroupInput,
    { models }: any
  ) => {
    const { name } = changes;

    const {productId}:types.VariantGroup = await models.variantGroup.findOne({_id})
    const isRepeat = Boolean(
      await models.variantGroup.findOne({ productId, name })
    );
    if (isRepeat) throw "This variant group already exist";

    await models.variantGroup.updateOne({ _id }, changes);
    return await models.variantGroup.find({});
  },

  deleteVariantGroup: async (parent: any, { _id }: any, { models }: any) => {
    const {productId}:types.VariantGroup = await models.variantGroup.findOne({_id})
    await models.variant.deleteMany({productId})
    await models.variantGroup.deleteOne({ _id });
    return await models.variantGroup.find({});
  },
};
