const express = require("express");
const app = express();

// Built-in Middleware
app.use(express.json());

// Custom Middleware
const logger = require("./middleware/logger");
app.use(logger);

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Error Handling Middleware (Last)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
