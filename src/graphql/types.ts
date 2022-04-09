import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Cart = {
  __typename?: 'Cart';
  _id: Scalars['ID'];
  currency: CartCurrency;
  discounts: Array<Maybe<CartDiscount>>;
  items: Array<Maybe<CartItem>>;
  subtotal: Scalars['Float'];
  totalItems: Scalars['Int'];
};

export type CartCurrency = {
  __typename?: 'CartCurrency';
  code: Scalars['String'];
  symbol: Scalars['String'];
};

export type CartDiscount = {
  __typename?: 'CartDiscount';
  amount?: Maybe<Scalars['Float']>;
  code: Scalars['String'];
};

export type CartItem = {
  __typename?: 'CartItem';
  _id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
  subtotal: Scalars['Float'];
  total: Scalars['Float'];
  variant?: Maybe<Variant>;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID'];
  assets: Array<Maybe<Scalars['String']>>;
  children: Array<Maybe<Category>>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<Category>;
  products: Array<Product>;
  updatedAt: Scalars['Date'];
};

export type Conditionals = {
  __typename?: 'Conditionals';
  hasImages: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isInventoryManaged: Scalars['Boolean'];
  isSoldOut: Scalars['Boolean'];
};

export type Discount = {
  __typename?: 'Discount';
  _id: Scalars['String'];
  code: Scalars['String'];
  currentQuantity: Scalars['Int'];
  endsOn?: Maybe<Scalars['Date']>;
  isExpired: Scalars['Boolean'];
  limitQuantity?: Maybe<Scalars['Int']>;
  products: Array<Product>;
  startsOn: Scalars['Date'];
  type: DiscountType;
  value: Scalars['Int'];
};

export enum DiscountType {
  Number = 'number',
  Percentage = 'percentage'
}

export type Inventory = {
  __typename?: 'Inventory';
  avaible?: Maybe<Scalars['Int']>;
  managed: Scalars['Boolean'];
};

export type Merchant = {
  __typename?: 'Merchant';
  _id: Scalars['ID'];
  adress?: Maybe<MerchantAdress>;
  currency?: Maybe<MerchantCurrency>;
  email?: Maybe<Scalars['String']>;
};

export type MerchantAdress = {
  __typename?: 'MerchantAdress';
  city: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  zip: Scalars['String'];
};

export type MerchantCurrency = {
  __typename?: 'MerchantCurrency';
  code: Scalars['String'];
  symbol: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addCartItem: Cart;
  createCart: Cart;
  createCategory: Category;
  createDiscount: Discount;
  createMerchant: Merchant;
  createOrder: Order;
  createProduct: Product;
  createShippingMethod: Array<Maybe<ShippingMethod>>;
  createUser: User;
  createVariant: Variant;
  createVariantGroup: Array<VariantGroup>;
  deleteCart: Array<Maybe<Cart>>;
  deleteCartItem: Cart;
  deleteCategory: Array<Maybe<Category>>;
  deleteDiscount: Array<Maybe<Discount>>;
  deleteOrder: Array<Maybe<Order>>;
  deleteProduct: Array<Maybe<Product>>;
  deleteShippingMethod: Array<Maybe<ShippingMethod>>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  deleteVariant: Array<Maybe<Variant>>;
  deleteVariantGroup: Array<Maybe<VariantGroup>>;
  updateCartItem: Cart;
  updateCategory: Category;
  updateDiscount: Discount;
  updateMerchant: Merchant;
  updateOrder: Order;
  updateProduct: Product;
  updateShippingMethod: Array<ShippingMethod>;
  updateUser: User;
  updateVariant: Variant;
  updateVariantGroup: Array<VariantGroup>;
};


export type MutationAddCartItemArgs = {
  cartId: Scalars['ID'];
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
  variantId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateCategoryArgs = {
  assets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateDiscountArgs = {
  code: Scalars['String'];
  endsOn?: InputMaybe<Scalars['Date']>;
  limitQuantity?: InputMaybe<Scalars['Int']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsOn: Scalars['Date'];
  type: DiscountType;
  value: Scalars['Int'];
};


export type MutationCreateMerchantArgs = {
  adress?: InputMaybe<MerchantAdressInput>;
  currency?: InputMaybe<MerchantCurrencyInput>;
  email?: InputMaybe<Scalars['String']>;
};


export type MutationCreateOrderArgs = {
  cart: Scalars['ID'];
  customer: OrderCustomerInput;
  shipping: OrderShippingInput;
};


export type MutationCreateProductArgs = {
  assets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  conditionals: ConditionalsInput;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  inventory: InventoryInput;
  name: Scalars['String'];
  price: Scalars['Float'];
  relatedProducts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  shippingMethods: Array<Scalars['ID']>;
};


export type MutationCreateShippingMethodArgs = {
  name: Scalars['String'];
  price: Scalars['Float'];
  zones: Array<ShippingMethodZoneInput>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateVariantArgs = {
  assets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<Scalars['Int']>;
  options: Array<VariantOptionInput>;
  price?: InputMaybe<Scalars['Float']>;
  productId: Scalars['ID'];
};


export type MutationCreateVariantGroupArgs = {
  assets?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  options: Array<Scalars['String']>;
  productId: Scalars['ID'];
};


export type MutationDeleteCartArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteCartItemArgs = {
  cartId: Scalars['ID'];
  cartItemId: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteDiscountArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteOrderArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteShippingMethodArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteVariantArgs = {
  _id: Scalars['ID'];
};


export type MutationDeleteVariantGroupArgs = {
  _id: Scalars['ID'];
};


export type MutationUpdateCartItemArgs = {
  cartId: Scalars['ID'];
  cartItemId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationUpdateCategoryArgs = {
  _id: Scalars['ID'];
  assets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateDiscountArgs = {
  _id: Scalars['ID'];
  code?: InputMaybe<Scalars['String']>;
  endsOn?: InputMaybe<Scalars['Date']>;
  limitQuantity?: InputMaybe<Scalars['Int']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsOn?: InputMaybe<Scalars['Date']>;
  type?: InputMaybe<DiscountType>;
  value?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateMerchantArgs = {
  _id: Scalars['ID'];
  adress?: InputMaybe<MerchantAdressInput>;
  currency?: InputMaybe<MerchantCurrencyInput>;
  email?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOrderArgs = {
  _id: Scalars['ID'];
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  _id: Scalars['ID'];
  assets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  conditionals?: InputMaybe<ConditionalsInput>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<InventoryInput>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  relatedProducts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  shippingMethods?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateShippingMethodArgs = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  zones?: InputMaybe<Array<InputMaybe<ShippingMethodZoneInput>>>;
};


export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateVariantArgs = {
  _id: Scalars['ID'];
  assets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  inventory?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateVariantGroupArgs = {
  _id: Scalars['ID'];
  assets?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<Scalars['String']>>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID'];
  cart: Cart;
  createdAt: Scalars['Date'];
  custormer: OrderCustomer;
  shipping: OrderShipping;
  status: OrderStatus;
  updatedAt: Scalars['Date'];
};

export type OrderCustomer = {
  __typename?: 'OrderCustomer';
  email: Scalars['String'];
};

export type OrderShipping = {
  __typename?: 'OrderShipping';
  city: Scalars['String'];
  country: Scalars['String'];
  name: Scalars['String'];
  street: Scalars['String'];
  zip: Scalars['String'];
};

export enum OrderStatus {
  Fullfilled = 'fullfilled',
  Notfullfilled = 'notfullfilled'
}

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  assets: Array<Maybe<Scalars['String']>>;
  categories: Array<Maybe<Category>>;
  conditionals: Conditionals;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  image?: Maybe<Scalars['String']>;
  inventory: Inventory;
  name: Scalars['String'];
  price: Scalars['Float'];
  relatedProducts: Array<Maybe<Product>>;
  sales: Scalars['Int'];
  shippingMethods: Array<Maybe<ShippingMethod>>;
  updatedAt?: Maybe<Scalars['Date']>;
  variantGroups: Array<Maybe<VariantGroup>>;
  variants: Array<Maybe<Variant>>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  getCartById: Cart;
  getCategoryById: Category;
  getDiscountById: Discount;
  getMerchant: Merchant;
  getOrderById: Order;
  getProductById: Product;
  getShippingMethodById: ShippingMethod;
  getUserById: User;
  getVariantById: Variant;
  getVariantGroupById?: Maybe<VariantGroup>;
  listCart: Array<Maybe<Cart>>;
  listCategory: Array<Maybe<Category>>;
  listDiscount: Array<Maybe<Discount>>;
  listOrder: Array<Maybe<Order>>;
  listProduct: Array<Maybe<Product>>;
  listShippingMethod: Array<Maybe<ShippingMethod>>;
  listUser: Array<Maybe<User>>;
  listVariant: Array<Maybe<Variant>>;
  listVariantGroup: Array<Maybe<VariantGroup>>;
};


export type QueryGetCartByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetCategoryByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetDiscountByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetOrderByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetProductByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetShippingMethodByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetVariantByIdArgs = {
  _id: Scalars['ID'];
};


export type QueryGetVariantGroupByIdArgs = {
  _id: Scalars['ID'];
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  _id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  zones: Array<ShippingMethodZone>;
};

export type ShippingMethodZone = {
  __typename?: 'ShippingMethodZone';
  country: Scalars['String'];
  regions: Array<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  type: Scalars['String'];
};

export type Variant = {
  __typename?: 'Variant';
  _id: Scalars['String'];
  assets?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  inventory?: Maybe<Scalars['Int']>;
  options: Array<VariantOption>;
  price: Scalars['Float'];
  productId: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type VariantGroup = {
  __typename?: 'VariantGroup';
  _id: Scalars['ID'];
  assets?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  options: Array<Scalars['String']>;
  productId: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type VariantOption = {
  __typename?: 'VariantOption';
  option: Scalars['String'];
  variantGroup: Scalars['String'];
};

export type ConditionalsInput = {
  hasImages?: InputMaybe<Scalars['Boolean']>;
  isActive: Scalars['Boolean'];
  isInventoryManaged?: InputMaybe<Scalars['Boolean']>;
};

export type InventoryInput = {
  avaible?: InputMaybe<Scalars['Int']>;
  managed: Scalars['Boolean'];
};

export type MerchantAdressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  zip: Scalars['String'];
};

export type MerchantCurrencyInput = {
  code?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
};

export type OrderCustomerInput = {
  email: Scalars['String'];
};

export type OrderShippingInput = {
  city?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  zip?: InputMaybe<Scalars['String']>;
};

export type ShippingMethodZoneInput = {
  country: Scalars['String'];
  regions: Array<Scalars['String']>;
};

export type VariantOptionInput = {
  option: Scalars['String'];
  variantGroup: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: ResolverTypeWrapper<Scalars['String']>;
  Cart: ResolverTypeWrapper<Cart>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CartCurrency: ResolverTypeWrapper<CartCurrency>;
  CartDiscount: ResolverTypeWrapper<CartDiscount>;
  CartItem: ResolverTypeWrapper<CartItem>;
  Category: ResolverTypeWrapper<Category>;
  Conditionals: ResolverTypeWrapper<Conditionals>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Discount: ResolverTypeWrapper<Discount>;
  DiscountType: DiscountType;
  Inventory: ResolverTypeWrapper<Inventory>;
  Merchant: ResolverTypeWrapper<Merchant>;
  MerchantAdress: ResolverTypeWrapper<MerchantAdress>;
  MerchantCurrency: ResolverTypeWrapper<MerchantCurrency>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderCustomer: ResolverTypeWrapper<OrderCustomer>;
  OrderShipping: ResolverTypeWrapper<OrderShipping>;
  OrderStatus: OrderStatus;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  ShippingMethod: ResolverTypeWrapper<ShippingMethod>;
  ShippingMethodZone: ResolverTypeWrapper<ShippingMethodZone>;
  User: ResolverTypeWrapper<User>;
  Variant: ResolverTypeWrapper<Variant>;
  VariantGroup: ResolverTypeWrapper<VariantGroup>;
  VariantOption: ResolverTypeWrapper<VariantOption>;
  conditionalsInput: ConditionalsInput;
  inventoryInput: InventoryInput;
  merchantAdressInput: MerchantAdressInput;
  merchantCurrencyInput: MerchantCurrencyInput;
  orderCustomerInput: OrderCustomerInput;
  orderShippingInput: OrderShippingInput;
  shippingMethodZoneInput: ShippingMethodZoneInput;
  variantOptionInput: VariantOptionInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: Scalars['String'];
  Cart: Cart;
  ID: Scalars['ID'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  CartCurrency: CartCurrency;
  CartDiscount: CartDiscount;
  CartItem: CartItem;
  Category: Category;
  Conditionals: Conditionals;
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Discount: Discount;
  Inventory: Inventory;
  Merchant: Merchant;
  MerchantAdress: MerchantAdress;
  MerchantCurrency: MerchantCurrency;
  Mutation: {};
  Order: Order;
  OrderCustomer: OrderCustomer;
  OrderShipping: OrderShipping;
  Product: Product;
  Query: {};
  ShippingMethod: ShippingMethod;
  ShippingMethodZone: ShippingMethodZone;
  User: User;
  Variant: Variant;
  VariantGroup: VariantGroup;
  VariantOption: VariantOption;
  conditionalsInput: ConditionalsInput;
  inventoryInput: InventoryInput;
  merchantAdressInput: MerchantAdressInput;
  merchantCurrencyInput: MerchantCurrencyInput;
  orderCustomerInput: OrderCustomerInput;
  orderShippingInput: OrderShippingInput;
  shippingMethodZoneInput: ShippingMethodZoneInput;
  variantOptionInput: VariantOptionInput;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['CartCurrency'], ParentType, ContextType>;
  discounts?: Resolver<Array<Maybe<ResolversTypes['CartDiscount']>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['CartItem']>>, ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartCurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartCurrency'] = ResolversParentTypes['CartCurrency']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartDiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartDiscount'] = ResolversParentTypes['CartDiscount']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subtotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['Variant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  assets?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  children?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConditionalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Conditionals'] = ResolversParentTypes['Conditionals']> = {
  hasImages?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isInventoryManaged?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSoldOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endsOn?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  isExpired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  limitQuantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  startsOn?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['DiscountType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Inventory'] = ResolversParentTypes['Inventory']> = {
  avaible?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  managed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MerchantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Merchant'] = ResolversParentTypes['Merchant']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  adress?: Resolver<Maybe<ResolversTypes['MerchantAdress']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['MerchantCurrency']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MerchantAdressResolvers<ContextType = any, ParentType extends ResolversParentTypes['MerchantAdress'] = ResolversParentTypes['MerchantAdress']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MerchantCurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MerchantCurrency'] = ResolversParentTypes['MerchantCurrency']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addCartItem?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationAddCartItemArgs, 'cartId' | 'productId' | 'quantity'>>;
  createCart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'name'>>;
  createDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationCreateDiscountArgs, 'code' | 'startsOn' | 'type' | 'value'>>;
  createMerchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType, RequireFields<MutationCreateMerchantArgs, never>>;
  createOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'cart' | 'customer' | 'shipping'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'conditionals' | 'inventory' | 'name' | 'price' | 'shippingMethods'>>;
  createShippingMethod?: Resolver<Array<Maybe<ResolversTypes['ShippingMethod']>>, ParentType, ContextType, RequireFields<MutationCreateShippingMethodArgs, 'name' | 'price' | 'zones'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'firstName' | 'lastName' | 'password'>>;
  createVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType, RequireFields<MutationCreateVariantArgs, 'options' | 'productId'>>;
  createVariantGroup?: Resolver<Array<ResolversTypes['VariantGroup']>, ParentType, ContextType, RequireFields<MutationCreateVariantGroupArgs, 'name' | 'options' | 'productId'>>;
  deleteCart?: Resolver<Array<Maybe<ResolversTypes['Cart']>>, ParentType, ContextType, RequireFields<MutationDeleteCartArgs, '_id'>>;
  deleteCartItem?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationDeleteCartItemArgs, 'cartId' | 'cartItemId'>>;
  deleteCategory?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, '_id'>>;
  deleteDiscount?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType, RequireFields<MutationDeleteDiscountArgs, '_id'>>;
  deleteOrder?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, '_id'>>;
  deleteProduct?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, '_id'>>;
  deleteShippingMethod?: Resolver<Array<Maybe<ResolversTypes['ShippingMethod']>>, ParentType, ContextType, RequireFields<MutationDeleteShippingMethodArgs, '_id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, '_id'>>;
  deleteVariant?: Resolver<Array<Maybe<ResolversTypes['Variant']>>, ParentType, ContextType, RequireFields<MutationDeleteVariantArgs, '_id'>>;
  deleteVariantGroup?: Resolver<Array<Maybe<ResolversTypes['VariantGroup']>>, ParentType, ContextType, RequireFields<MutationDeleteVariantGroupArgs, '_id'>>;
  updateCartItem?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<MutationUpdateCartItemArgs, 'cartId' | 'cartItemId' | 'quantity'>>;
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, '_id'>>;
  updateDiscount?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<MutationUpdateDiscountArgs, '_id'>>;
  updateMerchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType, RequireFields<MutationUpdateMerchantArgs, '_id'>>;
  updateOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, '_id'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, '_id'>>;
  updateShippingMethod?: Resolver<Array<ResolversTypes['ShippingMethod']>, ParentType, ContextType, RequireFields<MutationUpdateShippingMethodArgs, '_id'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, '_id'>>;
  updateVariant?: Resolver<ResolversTypes['Variant'], ParentType, ContextType, RequireFields<MutationUpdateVariantArgs, '_id'>>;
  updateVariantGroup?: Resolver<Array<ResolversTypes['VariantGroup']>, ParentType, ContextType, RequireFields<MutationUpdateVariantGroupArgs, '_id'>>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  custormer?: Resolver<ResolversTypes['OrderCustomer'], ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['OrderShipping'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderCustomer'] = ResolversParentTypes['OrderCustomer']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderShippingResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderShipping'] = ResolversParentTypes['OrderShipping']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  assets?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  categories?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  conditionals?: Resolver<ResolversTypes['Conditionals'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inventory?: Resolver<ResolversTypes['Inventory'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  relatedProducts?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  sales?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shippingMethods?: Resolver<Array<Maybe<ResolversTypes['ShippingMethod']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  variantGroups?: Resolver<Array<Maybe<ResolversTypes['VariantGroup']>>, ParentType, ContextType>;
  variants?: Resolver<Array<Maybe<ResolversTypes['Variant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getCartById?: Resolver<ResolversTypes['Cart'], ParentType, ContextType, RequireFields<QueryGetCartByIdArgs, '_id'>>;
  getCategoryById?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<QueryGetCategoryByIdArgs, '_id'>>;
  getDiscountById?: Resolver<ResolversTypes['Discount'], ParentType, ContextType, RequireFields<QueryGetDiscountByIdArgs, '_id'>>;
  getMerchant?: Resolver<ResolversTypes['Merchant'], ParentType, ContextType>;
  getOrderById?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryGetOrderByIdArgs, '_id'>>;
  getProductById?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryGetProductByIdArgs, '_id'>>;
  getShippingMethodById?: Resolver<ResolversTypes['ShippingMethod'], ParentType, ContextType, RequireFields<QueryGetShippingMethodByIdArgs, '_id'>>;
  getUserById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, '_id'>>;
  getVariantById?: Resolver<ResolversTypes['Variant'], ParentType, ContextType, RequireFields<QueryGetVariantByIdArgs, '_id'>>;
  getVariantGroupById?: Resolver<Maybe<ResolversTypes['VariantGroup']>, ParentType, ContextType, RequireFields<QueryGetVariantGroupByIdArgs, '_id'>>;
  listCart?: Resolver<Array<Maybe<ResolversTypes['Cart']>>, ParentType, ContextType>;
  listCategory?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  listDiscount?: Resolver<Array<Maybe<ResolversTypes['Discount']>>, ParentType, ContextType>;
  listOrder?: Resolver<Array<Maybe<ResolversTypes['Order']>>, ParentType, ContextType>;
  listProduct?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  listShippingMethod?: Resolver<Array<Maybe<ResolversTypes['ShippingMethod']>>, ParentType, ContextType>;
  listUser?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  listVariant?: Resolver<Array<Maybe<ResolversTypes['Variant']>>, ParentType, ContextType>;
  listVariantGroup?: Resolver<Array<Maybe<ResolversTypes['VariantGroup']>>, ParentType, ContextType>;
};

export type ShippingMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingMethod'] = ResolversParentTypes['ShippingMethod']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  zones?: Resolver<Array<ResolversTypes['ShippingMethodZone']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingMethodZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingMethodZone'] = ResolversParentTypes['ShippingMethodZone']> = {
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Variant'] = ResolversParentTypes['Variant']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inventory?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['VariantOption']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['VariantGroup'] = ResolversParentTypes['VariantGroup']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VariantOption'] = ResolversParentTypes['VariantOption']> = {
  option?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variantGroup?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cart?: CartResolvers<ContextType>;
  CartCurrency?: CartCurrencyResolvers<ContextType>;
  CartDiscount?: CartDiscountResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Conditionals?: ConditionalsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Discount?: DiscountResolvers<ContextType>;
  Inventory?: InventoryResolvers<ContextType>;
  Merchant?: MerchantResolvers<ContextType>;
  MerchantAdress?: MerchantAdressResolvers<ContextType>;
  MerchantCurrency?: MerchantCurrencyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderCustomer?: OrderCustomerResolvers<ContextType>;
  OrderShipping?: OrderShippingResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ShippingMethod?: ShippingMethodResolvers<ContextType>;
  ShippingMethodZone?: ShippingMethodZoneResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Variant?: VariantResolvers<ContextType>;
  VariantGroup?: VariantGroupResolvers<ContextType>;
  VariantOption?: VariantOptionResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';