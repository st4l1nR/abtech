import * as types from "../../types";

export const userQueries = {
  listUser: async (parent: any, args: any, { models }: any) =>
    models.user.find(),
  getUserById: async (parent: any, { _id }: any, { models }: any) =>
    models.user.findOne({ _id }),
};

export const userMutations = {
  createUser: async (
    parent: any,
    args: types.createUserInput,
    { models }: any
  ) => {
    console.log(args);
    const repeatEmail = Boolean(
      await models.user.findOne({ email: args.email })
    );
    if (repeatEmail) throw new Error("email already in use");
    const newUser = new models.user(args);
    return await newUser.save();
  },
  updateUser: async (
    parent: any,
    { _id, ...args }: types.updateUserInput,
    { models }: any
  ) => await models.user.findOneAndUpdate({ _id }, args, { new: true }),
  deleteUser: async (parent: any, { _id }: any, { models }: any) => {
    await models.user.deleteOne({ _id });
    return true;
  },
};
