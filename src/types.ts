export interface Product {
    _id: string
    name:string
    description?:string
    price:number
    inventory:{
        managed:boolean,
        avaible:number
    }
    conditionals:{
        isActive:boolean
        isInventoryManaged:boolean
        isSoldOut:boolean // server
        hasImages:boolean
    }
    image?:string
    assets?:string[]
    variantGroups?:Variant[]
    shippingMethods:ShippingMethod[]
    categories?:Category[]
    relatedProducts?:Product[]
}

export interface productInput {
    name:string
    description?:string
    price:number
    inventory:{
        managed:boolean,
        avaible?:number
    }
    conditionals:{
        isActive:boolean
        isInventoryManaged:boolean
        hasImages:boolean
    }
    image?:string
    assets?:[]
    variantGroups?:string[]
    shippingMethods:string[]
    categories?:string[]
    relatedProducts?:string[]
}



export interface VariantGroup {
    _id:string
    name:string
    options:VariantGroupOption[]
    assets?:string[]
    productId:string
}

export interface VariantGroupOption {
    _id:string
    name:string
    price:number
}

export interface variantGroupInput {
    name:string
    options:{
        name:string
        price?:number
    }[]
    assets?:string[]
    productId:string
}

export interface Variant {
    _id:string,
    inventory:number // server
    price:number // server
    description?:string
    options:{
        [index:string]:string
    }
    assets?:string[]
    productId:string
}

export interface variantInput {
    inventory?:number
    price?:number
    description?:string
    options:{
        [index:string]:string
    }
    assets?:string[]
    productId:string
}

export interface Category {
    _id:string
    parentId?:string
    name:string
    description?:string
    assets?:string[]
    children?:Category[] // server
    products:Product[]
}

export interface categoryInput{
    parentId?:string
    name:string
    description?:string
    assets?:string[]
    products:string[]
}

export interface ShippingMethod {
    _id:string
    name:string
    price:number
    countries:string[]
    regions:{
        [index:string]:string[]
    }
}

export interface shippingMethodInput {
    name:string
    price:number
    countries:string[]
    regions:{
        [index:string]:string[]
    }
}

export interface Discount {
    _id:string
    code:string
    type:"percentage"|"number"
    value:number
    startsOn:Date
    endsOn?:Date
    isExpired:boolean //server
    limitQuantity?:number
    currentQuantity:number //server
    products:Product[]
}

export interface discountInput {
    code:string
    type:string
    value:number
    startsOn:Date
    endsOn?:Date
    limitQuantity?:number
    products?:string[]
}