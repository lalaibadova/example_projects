const express = require("express");
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const DB = process.env.DB;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const foodSchema = new Schema({
  img: { type: String, required: true },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const FoodModel = mongoose.model("food", foodSchema);

app.get("/foods", async (req, res) => {
  const foods = await FoodModel.find();
  try {
    if (foods.length > 0) {
      res.status(200).send({
        message: "OK",
        data: foods,
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
app.get("/foods/:id", async (req, res) => {
  const { id } = req.params;
  const food = await FoodModel.findById(id);
  try {
    res.status(200).send({
      message: "OK",
      data: food,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
      error: true,
    });
  }
});
app.delete("/foods/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await FoodModel.findByIdAndDelete(id);
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
app.post("/foods",async(req,res)=>{
    try {
      const newFood=new FoodModel({...req.body})  
      await newFood.save()
      res.status(200).send({
        message:"OK",
        data:newFood
      })
    } catch (error) {
        res.status(500).send({
      message: error,
      error: true,
    });
    }
})
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
