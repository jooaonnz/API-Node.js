const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../../.env" });

console.log("HOST:", process.env.DB_HOST);
console.log("USER:", process.env.DB_USER);
console.log("PASSWORD:", process.env.DB_PASSWORD);
console.log("DATABASE:", process.env.DB_NAME);

// Criando a conexão
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Conectando ao MySQL
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("✅ Banco de dados conectado com sucesso!");
  }
});

module.exports = db;
