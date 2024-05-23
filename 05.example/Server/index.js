const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
var cors = require("cors");
var bodyParser = require("body-parser");

const PORT = process.env.PORT;
const DB = process.env.DB;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const foundationSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const foundationModel = mongoose.model("foundation", foundationSchema);
app.get("/foundation", async (req, res) => {
  const foundation = await foundationModel.find();
  try {
    if (foundation.length > 0) {
      res.status(200).send({
        message: "OK",
        data: foundation,
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
app.get("/foundation/:id", async (req, res) => {
  const { id } = req.params;
  const foundation = await foundationModel.findById(id);
  try {
    res.status(200).send({
      message: "OK",
      data: foundation,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
      error: true,
    });
  }
});
app.delete("/foundation/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await foundationModel.findByIdAndDelete(id);
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
app.post("/foundation", async (req, res) => {
  const newFoundation = foundationModel({ ...req.body });
  try {
    await newFoundation.save();
    res.status(200).send({
      message: "OK",
      data: newFoundation,
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
