 const express=require('express')
 
 const test=(req,res)=>{
    res.status(200).json({message:'api is working'})
}
module.exports =test