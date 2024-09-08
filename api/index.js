const express = require('express')
const mongoose =require('mongoose')
const dotenv =require('dotenv')
const userRoutes=require('./routes/user.route')
const authRoutes=require('./routes/auth.route')
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
app.use(express.json())
app.listen(3000,()=>{
    console.log('server is running on 3000!')
})

app.use('/api/v1/user',userRoutes) 
app.use('/api/v1/auth',authRoutes)

