import * as types from "../../types";

export const categoryQueries = {
  listCategory: async (parent: any, args: any, { models }) =>
    await models.category.find({}),
  getCategoryById: async (parent: any, { _id }: any, { models }) =>
    await models.category.findOne({ _id }),
};

export const categoryMutations = {
  createCategory: async (
    parent: any,
    args: types.categoryInput,
    { models }
  ) => {
    const newCategory = new models.category(args);
    return await newCategory.save();
  },
  updateCategory: async (parent: any, { _id, ...args }: any, { models }) =>
    await models.category.findOneAndUpdate({ _id }, args, { new: true }),
  deleteCategory: async (parent: any, { _id }: any, { models }) => {
    await models.category.deleteOne({ _id });
    return await models.category.find({});
  },
};
