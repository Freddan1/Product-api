require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnect')


connectDB();   

app.use(express.json());
app.use(cors())

const productRouter = require('./routes/products')
app.use('/products', productRouter)

mongoose.connection.once('open', ()=>{
console.log("Connected to MongoDB")
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})
}) 





