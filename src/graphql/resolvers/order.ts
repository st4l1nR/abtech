import * as types from "../../types";

export const orderQueries = {
  getOrderById: async (parent: any, { _id }: any, { models }: any) =>
    await models.order.findOne({ _id }),
  listOrder: async (parent: any, args: any, { models }: any) =>
    await models.order.find(),
};

export const orderMutations = {
  createOrder: async (
    parent: any,
    args: types.createOrderInput,
    { models }: any
  ) => {
    const newOrder = new models.order(args);
    const { _id }: types.Order = await newOrder.save();
    return await models.order.findOne({ _id }).populate("cart");
  },
  updateOrder: async (
    parent: any,
    { _id, ...args }: types.updateOrderInput,
    { models }: any
  ) => await models.order.findOneAndUpdate({ _id }, args, { new: true }),
  deleteOrder: async (parent: any, { _id }: any, { models }: any) => {
    const order: types.Order = await models.order.findOne({ _id });
    if (order.status === "fullfilled"!) throw "order can't be deleted";
    await models.order.deleteOne({ _id });
    return await models.order.find();
  },
};
