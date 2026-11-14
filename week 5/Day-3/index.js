const express = require("express");
const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Express API is working...");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// Contact route (POST)
app.post("/contact", (req, res) => {
  res.send("Contact form submitted!");
});

// Task 2: Return User Data in JSON Format
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Ananya",
    role: "Intern",
    skills: ["Node.js", "Express.js", "Git"],
  });
});

// Route Parameters
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Query Strings
app.get("/search", (req, res) => {
  const query = req.query;
  res.json(query);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
