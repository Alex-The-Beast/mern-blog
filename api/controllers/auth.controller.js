const User =require ('../models/user.model')
const bcrypt =require('bcryptjs')
const errorHandler =require('../utils/error')
const express=require('express')
const jwt =require('jsonwebtoken')
const signup=async(req,res,next)=>{
    const {username,email,password}=req.body
    if(!username || !email || !password || username===''|| email ==='' || password ===''){
        next(errorHandler(400,'All fields are required'))
    }

    const hashedPassword =bcrypt.hashSync(password,10)
    const newUser=new User({username,
        email,
        password:hashedPassword
    })

    try{
        await newUser.save()
        res.json({message:'signup successful'})

    }catch(error) {
      next(error)
    }


}

module.exports=signup



const signin= async (req,res,next)=>{
    const {email,password}=req.body
    if (!email || !password || email==="" || password===""){
       return  next(errorHandler(400,"All fields are required"))
    }
    try {
     const validUser =await User.findOne({email})
     if(!validUser){
        next(errorHandler(404,"User not found"))
     }
     const validPassword=bcrypt.compare(password,validUser.password)
     if(!validPassword){
       return  next(errorHandler(400,"Invalid Password"))
     }
     const token= jwt.sign(
       { id:validUser._id},process.env.JWT_SECRET)
    // for hiding the password from user we have to remove pass from rest of the data from spread operator.
    const {password:pass, ...rest}=validUser._doc
     res.status(200)
     .cookie('access_token',token,{
        httpOnly:true
     })
     .json(rest)
    }
     
    catch(error){
     next(error)   
    }

}

module.exports =signin