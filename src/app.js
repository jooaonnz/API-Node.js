const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const swaggerDocs = require("./config/swagger");

dotenv.config();
const app = express();

app.use(express.json());

// Rotas
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Swagger
swaggerDocs(app);

module.exports = app;
