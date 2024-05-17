const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const DB = process.env.DB_URL;
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const menuSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const MenuModel = new mongoose.model("Menu", menuSchema);

app.get("/menu", async (req, res) => {
  try {
    const menu = await MenuModel.find({});
    if (menu.length > 0) {
      res.status(200).send({
        messagge: "OK",
        data: menu,
      });
    } else {
      res.status(204).send({
        messagge: "not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      messagge: error,
      error: true,
    });
  }
});

app.get("/menu/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await MenuModel.findById(id);
    res.status(200).send({
      messagge: "OK",
      data: product,
    });
  } catch (error) {
    res.status(500).send({
      messagge: error,
      error: true,
    });
  }
});

app.delete("/menu/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await MenuModel.findByIdAndDelete(id);
    res.status(200).send({
      messagge: "deleted",
      data: deleted,
    });
  } catch (error) {
    res.status(500).send({
      messagge: error,
      error: true,
    });
  }
});

app.post("/menu", async (req, res) => {
  try {
    const newProduct = new MenuModel({ ...req.body });
    console.log(req.body);
    await newProduct.save();
    res.status(201).send({
      messagge: "created",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).send({
      messagge: error,
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
