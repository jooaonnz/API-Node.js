const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const swaggerDocs = require("./config/swagger");

dotenv.config();
const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas da aplicação
app.use("/api/users", userRoutes);

// Configuração do Swagger
swaggerDocs(app);

module.exports = app;
