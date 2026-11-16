const Product = require("../models/Product");

// Day 4 - Product CRUD + Filter (from notes docx)

// GET all Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET Product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create Product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "Product Added", product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update Product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product Updated", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product Deleted", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Day 5 - Filter/Search with query params + pagination (from notes docx)
exports.filterProducts = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;

    const filters = {};

    if (name) {
      filters.name = { $regex: name, $options: "i" };
    }
    if (category) {
      filters.category = category;
    }
    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gt = Number(minPrice);
      if (maxPrice) filters.price.$lt = Number(maxPrice);
    }

    const data = await Product.find(filters)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ total: data.length, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
