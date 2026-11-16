const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// Day 1 - Register
router.post("/register", register);

// Day 2 - Login (returns JWT)
router.post("/login", login);

// Day 3 - Protected profile route
router.get("/profile", protect, getProfile);

module.exports = router;
