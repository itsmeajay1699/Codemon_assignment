// name desc price

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: 1,
    maxlength: 100,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  price: {
    type: String,
    required: true,
    maxlength: 255,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
