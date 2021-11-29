import * as types from "../../types";

export const discountQueries = {
    listDiscount:async (parent:any, args:any, {models}) => await models.discount.find({}),
    getDiscountById:async (parent:any, {_id}:any, {models}) => await models.discount.findOne({_id})
}


export const discountMutations  = {
    createDiscount:async (parent:any , args:types.discountInput, {models}) => {
        const newDiscount = new models.discount(args)
        return await newDiscount.save()
    },
    updateDiscount:async (parent:any , {_id, ...args}:any, {models}) => await models.dicount.findOneAndUpdate({_id}, args, {new:true}),
    deleteDiscount:async (parent:any , {_id}:any, {models}) => {
        await models.discount.deleteOne({_id})
        return await models.discount.find({})
    },
}