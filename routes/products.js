const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getSingleProductById,
  updatePriceById,
  createProduct,
} = require("../controllers/product.js");

router.get("/", getAllProducts).post("/", createProduct);

router.get("/:id", getSingleProductById).patch("/:id", updatePriceById);

module.exports = { router };
