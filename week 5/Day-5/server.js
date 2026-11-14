require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const logger = require("./utils/logger");
const errorHandler = require("./middleware/errorHandler");

// Body Parser
app.use(express.json());

// Simple custom logger
app.use(logger);

// Use routes
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// PORT from .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
