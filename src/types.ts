//Merchant
export interface Merchant {
  _id: string;
  email?: string;
  adress?: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
  };
  currency: {
    code: string;
    symbol: string;
  };
}

export interface createMerchantInput {
  email?: string;
  adress?: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
  };
  currency?: {
    code: string;
    symbol: string;
  };
}

export interface updateMerchantInput {
  _id: string;
  email?: string;
  adress?: {
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
  };
  currency?: {
    code: string;
    symbol: string;
  };
}

//User
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  role:"normal" | "admin" | "root"
}

export interface createUserInput {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
}
export interface updateUserInput {
  _id: String;
  password?: string;
  role?:string
}

//Product
export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  inventory: {
    managed: boolean;
    avaible?: number;
  };
  conditionals: {
    isActive: boolean;
    isInventoryManaged: boolean; // resolverdb
    isSoldOut: boolean; //resolverdb
    hasImages: boolean; //resolverdb
  };
  image?: string;
  assets?: string[];
  sales: number; //resolverdb
  variantGroups?: VariantGroup[]; //resolverdb
  variants?: Variant[]; //resolverdb
  shippingMethods: ShippingMethod[];
  categories?: Category[];
  relatedProducts?: Product[];
  discount?: Discount; //resolverdb
  createdAt: Date;
  updatedAt: Date;
}

export interface createProductInput {
  name: string;
  description?: string;
  price: number;
  inventory: {
    managed: boolean;
    avaible?: number;
  };
  conditionals: {
    isActive: boolean;
  };
  image?: string;
  assets?: string[];
  shippingMethods: string[];
  categories?: string[];
  relatedProducts?: string[];
}

// VariantGroup
export interface VariantGroup {
  _id: string;
  name: string;
  options: string[];
  assets?: string[];
  productId: string;
}

export interface createVariantGroupInput {
  name: string;
  options: string[];
  assets?: string[];
  productId: string;
}

export interface updateVariantGroupInput {
  _id: String;
  name?: string;
  options?: string[];
  assets?: string[];
}

//Variant
export interface Variant {
  _id: string;
  inventory?: number;
  price: number;
  description?: string;
  options: {
    variantGroup: string;
    option: string;
  }[];
  assets?: string[];
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface createVariantInput {
  inventory?: number;
  price?: number;
  description?: string;
  options: {
    variantGroup: string;
    option: string;
  }[];
  assets?: string[];
  productId: string;
}

export interface updateVariantInput {
  _id: string;
  inventory?: number;
  price?: number;
  description?: string;
  assets?: string[];
}

//Category
export interface Category {
  _id: string;
  parent?: Category;
  name: string;
  description?: string;
  assets?: string[];
  children?: Category[]; // resolver
  products: Product[]; // resolver
  createdAt: Date;
  updatedAt: Date;
}

export interface createCategoryInput {
  parent?: string;
  name: string;
  description?: string;
  assets?: string[];
}

export interface updateCategoryInput {
  _id: string;
  parent?: string;
  name?: string;
  description?: string;
  assets?: string[];
}

//Cart
export interface Cart {
  _id: string;
  totalItems: number;
  subtotal: number;
  total: number;
  items: CartItem[];
  discounts: {
    code: string;
    amount: number;
  }[];
  currency: {
    code: string;
    symbol: string;
  };
  createdAt:Date
  updatedAt:Date
}

export interface CartItem {
  _id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
  total: number;
  variant?: string;
  image?: string;
}

export interface cartItemInput {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
  total: number;
  variant?: Variant;
  image?: string;
}

//Shipping Method
export interface ShippingMethod {
  _id: string;
  name: string;
  price: number;
  zones: {
    country: string;
    regions: string[];
  }[];
}

export interface shippingMethodInput {
  name: string;
  price: number;
  zones: {
    country: string;
    regions: string[];
  }[];
}

//Discount
export interface Discount {
  _id: string;
  code: string;
  type: "percentage" | "number";
  value: number;
  startsOn: Date;
  endsOn?: Date;
  isExpired: boolean; //server
  limitQuantity?: number;
  currentQuantity: number; //server
  products: Product[];
}

export interface discountInput {
  code: string;
  type: string;
  value: number;
  startsOn: Date;
  endsOn?: Date;
  limitQuantity?: number;
  products?: string[];
}

//Order
export interface Order {
  _id: string;
  status: "fullfilled" | "notfullfilled";
  customer: {
    email: string;
  };
  shipping: {
    name: string;
    street: string;
    city: string;
    country: string;
    zip: string;
  };
  cart: CartItem;
  createdAt:Date
  updatedAt:Date
}

export interface createOrderInput {
  customer: {
    email: string;
  };
  shipping: {
    name: string;
    country: string;
    state: string;
    city?: string;
    street: string;
    zip: string;
  };
  cart:String
}

export interface updateOrderInput {
  _id:string
  status?:"fullfilled" | "notfullfilled"
}