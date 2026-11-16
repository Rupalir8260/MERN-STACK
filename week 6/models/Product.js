const mongoose = require("mongoose");

// Day 4 - Product Model (from notes Day-4 docx)
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
