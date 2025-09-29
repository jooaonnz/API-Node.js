const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Rotas
app.use("/api/users", userRoutes);

module.exports = app;
