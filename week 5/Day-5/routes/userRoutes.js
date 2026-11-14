const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Basic CRUD
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);

// Task 3: Dynamic parameter endpoint (Page 10)
router.get("/:id/:section", (req, res) => {
  const { id, section } = req.params;
  res.json({
    userId: id,
    section: section,
  });
});

// Dynamic multi-parameters (Page 7)
router.get("/:userId/orders/:orderId", (req, res) => {
  const { userId, orderId } = req.params;
  res.json({
    message: "Order details",
    userId,
    orderId,
    query: req.query,
  });
});

module.exports = router;
