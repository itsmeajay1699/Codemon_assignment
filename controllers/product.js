const { Product } = require("../models/products");

const getSingleProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({
      message: "Single product",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      message: "All products",
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePriceById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      message: "Product updated",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({
      message: "Product created",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSingleProductById,
  getAllProducts,
  updatePriceById,
  createProduct,
};
