const fs = require("fs");

// Write file
fs.writeFile("student.txt", "Welcome to Node.js!", (err) => {
  if (err) throw err;
  console.log("File written successfully!");

  // Read file
  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});
