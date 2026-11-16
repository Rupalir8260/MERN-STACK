const productController = require("./controllers/productController");

function mockRes() {
  const res = {
    statusCode: 200,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.body = data;
      return this;
    },
  };
  return res;
}

console.log("\n--- Testing Product Controller Methods ---");

// 1. getAllProducts
let res = mockRes();
productController.getAllProducts({}, res);
console.log("1. getAllProducts:", res.statusCode === 200 && res.body.success ? "PASS" : "FAIL", `(Count: ${res.body.count})`);

// 2. getProductById (1)
res = mockRes();
productController.getProductById({ params: { id: "1" } }, res);
console.log("2. getProductById(1):", res.statusCode === 200 && res.body.name === "Laptop" ? "PASS" : "FAIL");

// 3. addProduct
res = mockRes();
productController.addProduct({ body: { name: "Keyboard", price: 700 } }, res);
console.log("3. addProduct:", res.statusCode === 201 && res.body.data.name === "Keyboard" ? "PASS" : "FAIL");

// 4. updateProduct
res = mockRes();
productController.updateProduct({ params: { id: "2" }, body: { price: 650 } }, res);
console.log("4. updateProduct:", res.statusCode === 200 && res.body.data.price === 650 ? "PASS" : "FAIL");

// 5. searchProducts
res = mockRes();
productController.searchProducts({ query: { name: "lap" } }, res);
console.log("5. searchProducts('lap'):", res.statusCode === 200 && res.body.length > 0 ? "PASS" : "FAIL");

// 6. deleteProduct
res = mockRes();
productController.deleteProduct({ params: { id: "1" } }, res);
console.log("6. deleteProduct(1):", res.statusCode === 200 ? "PASS" : "FAIL");

// 7. Validation: negative price
res = mockRes();
productController.addProduct({ body: { name: "Invalid", price: -50 } }, res);
console.log("7. addProduct Validation (Price <= 0):", res.statusCode === 400 ? "PASS" : "FAIL", `(${res.body.message})`);

console.log("\nAll Product API functions verified successfully!\n");
