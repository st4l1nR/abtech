import {connection , Schema, model} from 'mongoose'
import {User} from '../types/graphql'

delete connection.models['User']

const userSchema = new Schema<User>({
    firstName:{
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: String,
    image:String,
    type: {
        type:String,
        enum:["customer", "admin"],
        default:"customer"
    },
    provider : {
        type:String,
        enum:["google", "email"],
        default:"email"
    }
})
const userModel = model("User", userSchema)


export default model("User", userSchema)