export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  inventory: {
    managed: boolean;
    avaible: number;
  };
  conditionals: {
    isActive: boolean;
    isInventoryManaged: boolean;
    isSoldOut: boolean; // server
    hasImages: boolean;
  };
  image?: string;
  assets?: string[];
  sales:number
  variantGroups?: VariantGroup[];
  variants?:Variant[] // server
  shippingMethods: ShippingMethod[];
  categories?: Category[];
  relatedProducts?: Product[];
}

export interface productInput {
  name: string;
  description?: string;
  price: number;
  inventory: {
    managed: boolean;
    avaible?: number;
  };
  conditionals: {
    isActive: boolean;
    isInventoryManaged: boolean;
    hasImages: boolean;
  };
  image?: string;
  assets?: [];
  variantGroups?: variantGroupInput[];
  shippingMethods: string[];
  categories?: string[];
  relatedProducts?: string[];
}

export interface VariantGroup {
  _id: string;
  name: string;
  options: VariantGroupOption[];
  assets?: string[];
  productId: string;
}

export interface VariantGroupOption {
  _id: string;
  name: string;
  price: number;
}

export interface variantGroupInput {
  name: string;
  options: {
    name: string;
    price?: number;
  }[];
  assets?: string[];
  productId: string;
}

export interface Variant {
  _id: string;
  inventory?: number;
  price: number; // server
  description?: string;
  options: {
    variantGroupId: string;
    variantGroupOptionId: string;
  }[];
  assets?: string[];
  productId: string;
}

export interface variantInput {
  inventory?: number;
  price?: number;
  description?: string;
  options: {
    variantGroupId: string;
    variantGroupOptionId: string;
  }[];
  assets?: string[];
  productId: string;
}

export interface Category {
  _id: string;
  parent?: Category;
  name: string;
  description?: string;
  assets?: string[];
  children?: Category[]; // server
  products: Product[]; // server
}

export interface categoryInput {
  parent?: string;
  name: string;
  description?: string;
  assets?: string[];
}

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

export interface Order {}

export interface orderInput {
  
}