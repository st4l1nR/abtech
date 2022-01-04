import {connection , Schema, model} from 'mongoose'
import {User} from '../types'

delete connection.models['User']

const userSchema = new Schema<User>({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    role: {
        type:String,
        enum:["normal", "admin", "root"],
        default:"normal"
    }

})

export default model("User", userSchema)