import * as types from "../../types";

export const merchantQueries = {
  getMerchant: async (parent: any, args: any, { models }: any) => {
    const merchants: types.Merchant[] = await models.merchant.find();
    if (!merchants[0]) throw 'merchant undefined'
    return merchants[0];
  },
};

export const merchantMutations = {
  updateMerchant: async (
    parent: any,
    { _id, ...args }: types.updateMerchantInput,
    { models }: any
  ) => await models.merchant.findOneAndUpdate({ _id }, args),

};
