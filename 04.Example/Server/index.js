const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()
const { Schema } = mongoose;
var bodyParser = require('body-parser')
var cors = require('cors')
const PORT = process.env.PORT
const DB=process.env.DB

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const productSchema = new Schema({
    title:{type:String,required:true},
    img:{type:String,required:true},
    price:{type:Number,required:true},
    discountPercent:{type:Number,required:true},
    isNewProduct:{type:Boolean,required:true}
})

const ProductModel=mongoose.model("products",productSchema)


app.get("/products",async(req,res)=>{
    const products = await ProductModel.find()
    try {
        if (products.length>0) {
            res.status(200).send({
                message:"OK",
                data:products
            })
        }else{
             res.status(204).send({
                message:"not found",
                data:null
            })
        }
    } catch (error) {
         res.status(500).send({
                message:error,
                error:true
            })
    }
})
app.get("/products/:id",async(req,res)=>{
    const {id}=req.params
    const product=await ProductModel.findById(id)
    try {
        res.status(200).send({
            message:"OK",
            data:product
        })
    } catch (error) {
         res.status(500).send({
            message:error,
           error:true
        })
    }
})
app.delete("/products/:id",async(req,res)=>{
    const {id}=req.params
    const deleted=await ProductModel.findByIdAndDelete(id)
    try {
        res.status(200).send({
            message:"OK",
            data:deleted
        })
    } catch (error) {
         res.status(500).send({
            message:error,
           error:true
        })
    }
})
app.post("/products",async(req,res)=>{
    const newProduct= new ProductModel(req.body)
    try {
        await newProduct.save()
        res.status(200).send({
            message:"OK",
            data:newProduct
        })
    } catch (error) {
        res.status(500).send({
            message:error,
           error:true
        })
    }
})

mongoose.connect(DB).then(
  () => { console.log("connected")
  app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
 },
  err => { console.log(err)}
);
