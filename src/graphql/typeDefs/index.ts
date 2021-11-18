import {gql} from 'apollo-server-micro'
import product from './product'
import variantGroup from './variantGroup'
import variant from './variant'
import category from './category'
import shipping from './shippingMethod'
import discount from './discount'

const link = gql`
    scalar Date
    type Query {
        _:Boolean
    }
    
    type Mutation {
        _:Boolean
    }
`
export default [link, product, variantGroup, variant, category, shipping, discount]