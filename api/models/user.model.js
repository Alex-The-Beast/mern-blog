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
    profilePicture:{
        type:String,
        dafault:'https://www.google.com/imgres?imgurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fq%3Dprofile%2520pic%2520blank%26w%3D250%26h%3D250%26c%3D7&tbnid=FqmTJLqKfadDoM&vet=10CA4QxiAoCGoXChMI8MmJ96G_iAMVAAAAAB0AAAAAEAY..i&imgrefurl=https%3A%2F%2Fvm.ospray.org%2Fblank%2Fprofile-pic-blank.html&docid=OhB7u59zJcX6HM&w=250&h=250&itg=1&q=profile%20image&ved=0CA4QxiAoCGoXChMI8MmJ96G_iAMVAAAAAB0AAAAAEAY',
    },

},{timestamps:true}

)

const User=mongoose.model('User',userSchema)

module.exports=User