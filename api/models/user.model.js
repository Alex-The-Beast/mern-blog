const mongoose =require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({
     username:{
        type:String,
        unique:true,
        required:[true,"PLease provide your name"]

    },
    email:{
        type:String,
        required:[true,"Email must be provided"],
        validate:[validator.isEmail,"Provide a valid email"],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Please write a password"],
        minlength:8
    },

},{timestamps:true}

)

const User=mongoose.model('User',userSchema)

module.exports=User