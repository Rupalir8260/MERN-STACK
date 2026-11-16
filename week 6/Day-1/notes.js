// Day 1 - Task 1: What is MongoDB?
// MongoDB is a NoSQL database that stores data as JSON-like documents (BSON).
// It is schema-flexible, horizontally scalable, and ideal for modern web apps.
//
// Key Concepts:
// - Database: Container for collections (like a schema in SQL)
// - Collection: Group of documents (like a table in SQL)
// - Document: JSON-like object (like a row in SQL)
//
// Day 1 - Task 2: MongoDB Shell Commands (reference)
// mongosh                      -- connect to mongo shell
// show dbs                     -- list all databases
// use week6db                  -- switch/create database
// db.createCollection("users") -- create collection
// db.users.insertOne({ name: "Alice", age: 22 }) -- insert document
// db.users.find()              -- read all documents
// db.users.updateOne({ name: "Alice" }, { $set: { age: 23 } }) -- update
// db.users.deleteOne({ name: "Alice" }) -- delete

console.log("Day 1: MongoDB Concepts - NoSQL, Collections, Documents");
console.log("MongoDB stores data as BSON (Binary JSON) documents.");
console.log("No fixed schema - each document can have different fields.");
