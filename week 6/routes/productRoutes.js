const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  filterProducts,
} = require("../controllers/productController");

// Day 4 - CRUD endpoints (exact structure from notes docx)
router.get("/", getAllProducts);
router.get("/filter", filterProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
