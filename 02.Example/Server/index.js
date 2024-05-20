const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
var cors = require("cors");
var bodyParser = require("body-parser");
const PORT = process.env.PORT;
const DB = process.env.DB_URL;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price:{type:Number,required:true},
  image:{type:String,required:true}
});
const ProductModel = mongoose.model("Products", productSchema);

app.get("/products", async (req, res) => {
  const products = await ProductModel.find();
  try {
    if (products.length > 0) {
      res.status(200).send({
        message: "OK",
        data: products,
      });
    } else {
      res.status(204).send({
        message: "not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error,
      error: true,
    });
  }
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id);
  try {
    res.status(200).send({
      message: "OK",
      data: product,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
      error: true,
    });
  }
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await ProductModel.findByIdAndDelete(id);
  try {
    res.status(200).send({
      message: "OK",
      data: deleted,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
      error: true,
    });
  }
});
app.post("/products", async (req, res) => {
  const newProduct = new ProductModel({ ...req.body });
  try {
    await newProduct.save();
    res.status(201).send({
      message: "create",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
      error: true,
    });
  }
});

mongoose.connect(DB).then(
  () => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);
