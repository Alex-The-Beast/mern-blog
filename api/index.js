const express = require('express')
const mongoose =require('mongoose')
const dotenv =require('dotenv')
const userRoutes=require('./routes/user.route')
dotenv.config()

mongoose
.connect
    (process.env.MONGO)

.then(()=>{
    console.log("Mongodb is connected")
})
.catch(err=>{
    console.log(err)
})
const app =express()
app.listen(3000,()=>{
    console.log('server is running on 3000!')
})

app.use('/api/v1/user',userRoutes) 

