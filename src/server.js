const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../.env" });

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
