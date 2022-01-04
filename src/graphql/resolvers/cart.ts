import * as types from "../../types";

export const cartQueries = {
  listCart: async (parent: any, args: any, { models }: any) =>
    await models.cart.find({}),
  getCartById: async (parent: any, { _id }: any, { models }: any) =>
    await models.cart.findOne({ _id }),
};

export const cartMutations = {
  createCart: async (parent: any, args: any, { models }: any) => {
    const merchants: types.Merchant[] = await models.merchant.find({});
    const merchant = merchants[0];
    const newCart = new models.cart({
      currency: merchant.currency,
    });
    return await newCart.save();
  },
  addCartItem: async (
    parent: any,
    { cartId, productId, variantId, quantity }: any,
    { models }: any
  ) => {
    const calculateDiscount = (
      price: number,
      discount: types.Discount
    ): number => {
      if (discount.type === "percentage") return price * discount.value;
      else return discount.value;
    };

    const product: types.Product = await models.product
      .findOne({
        _id: productId,
      })
      .populate("discount");
    const cart: types.Cart = await models.findOne({
      _id: cartId,
      items: { productId },
    });
    console.log(cart)
    if (product.variants[0] && !variantId) throw "Select a variant for this product"

    const validators = {
      isVariant: variantId ? true : false,
      isInCart: cart.items[0] ? true : false,
      haveDiscount: product.discount ? true : false,
    };
    let discount =
      validators.haveDiscount &&
      calculateDiscount(product.price, product.discount);

    if (!validators.isInCart) {
      if (validators.haveDiscount) {
        await models.cart.updateOne(
          { _id: cartId },
          {
            $push: {
              discounts: {
                code: product.discount.code,
                amount: discount * quantity,
              },
            },
          }
        );
      }
      const cartItem: types.cartItemInput = {
        productId: product._id,
        name: product._id,
        quantity,
        price: product.price,
        subtotal: product.price * quantity,
        total: validators.haveDiscount
          ? product.price * quantity - discount * quantity
          : product.price * quantity,
        variant: variantId && variantId,
      };
      return await models.cart.findOneAndUpdate(
        { cartId },
        { $push: { items: cartItem } },
        { new: true }
      );
    } else {
      if (validators.haveDiscount) {
        await models.cart.updateOne(
          {
            _id: cartId,
            discounts: { code: product.discount.code },
          },
          { $inc: { "discounts.$": discount * quantity } }
        );
      }

      return await models.cart.findOneAndUpdate(
        { _id: cartId, items: { productId } },
        {
          $in: {
            "items.$.total": product.price * quantity,
            "items.$.quantity": quantity,
          },
        },
        { new: true }
      );
    }
  },
  updateCartItem: async (
    parent: any,
    { cartId, cartItemId, quantity }: any,
    { models }: any
  ) => {
    const cart: types.Cart = await models.cart.findOne({
      _id: cartId,
      items: { _id: cartItemId },
    });
    const cartItem = cart.items[0];

    models.cart.findOneAndUpdate(
      { _id: cartId, items: { _id: cartItemId } },
      { "items.$": { quantity , subtotal:cartItem.price * quantity, total:cartItem.price} }
    );
  },
};
