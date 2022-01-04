import * as types from "../../types";

export const categoryQueries = {
  listCategory: async (parent: any, args: any, { models }) =>
    await models.category.find({}),
  getCategoryById: async (parent: any, { _id }: any, { models }) =>
    await models.category.findOne({ _id }),
};

export const categoryMutations = {
  createCategory: async (
    _: any,
    args: types.createCategoryInput,
    { models }
  ) => {
    const { name, parent } = args;
    const repeatCategories: types.Category[] = await models.category.find({
      name,
    });
    if (repeatCategories[0]) throw "This category already exist";

    const isParent = await models.category.find()
    const newCategory = new models.category(args);
    return await newCategory.save();
  },
  updateCategory: async (parent: any, { _id, ...args }: types.updateCategoryInput, { models }) => {
    const {name} = args
    const repeatCategories:types.Category[] = await models.category.find({name})
    if (repeatCategories[0]) throw "This category already exist"

    return await models.category.findOneAndUpdate({ _id }, args, { new: true });
  },
  deleteCategory: async (parent: any, { _id }: any, { models }) => {
    await models.product.updateMany({ categories: _id}, {$pull:{categories:_id}});
    await models.category.deleteOne({ _id });
    return await models.category.find({});
  },
};
