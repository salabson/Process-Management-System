import express from "express";
const app = express();

// Set server port
const PORT = process.env.PORT | 3000;

// Start the server on specified port
app.listen(PORT, ()=> console.log("Server successfully started on port", PORT));