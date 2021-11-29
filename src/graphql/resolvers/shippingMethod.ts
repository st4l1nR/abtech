import * as types from "../../types";

export const shippingMethodQueries = {
  listShippingMethod: async (parent: any, args: any, { models }) =>
    await models.shippingMethod.find({}),
  getShippingMethodById: async (parent: any, { _id }: any, { models }) =>
    await models.shippingMethod.findOne({ _id }),
};

export const shippingMethodMutations = {
  createShippingMethod: async (
    parent: any,
    args: types.shippingMethodInput,
    { models }
  ) => {
    const newShippingMethod = new models.shippingMethod(args);
    await newShippingMethod.save();
    return await models.shippingMethod.find({});
  },
  updateShippingMethod: async (
    parent: any,
    { _id, ...args }: any,
    { models }
  ) => {
    await models.shippingMethod.updateOne({ _id }, args);
    return models.shippingMethod.find({});
  },
  deleteShippingMethod: async (parent: any, { _id }: any, { models }) => {
    await models.shippingMethod.deleteOne({ _id });
    return models.shippingMethod.find({});
  },
};
