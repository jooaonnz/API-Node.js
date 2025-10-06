const prompt = require("prompt-sync")({ sigint: true });
const db = require("../config/connection");
async function menu() {
  console.log("\n===== CRUD Console =====");
  console.log("1 - Listar Clientes");
  console.log("2 - Criar Cliente");
  console.log("3 - Atualizar Cliente");
  console.log("4 - Deletar Cliente");
  console.log("5 - Listar Pedidos");
  console.log("6 - Criar Pedido");
  console.log("0 - Sair");

  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1": // Listar Clientes
      try {
        const [clientes] = await db.query("SELECT * FROM cliente");
        console.table(clientes);
      } catch (err) {
        console.error("Erro ao listar clientes:", err);
      }
      break;

    case "2": // Criar Cliente
      try {
        const nome = prompt("Nome: ");
        const email = prompt("Email: ");
        await db.query("INSERT INTO cliente (nome, email) VALUES (?, ?)", [
          nome,
          email,
        ]);
        console.log("Cliente criado com sucesso!");
      } catch (err) {
        console.error("Erro ao criar cliente:", err);
      }
      break;

    case "3": // Atualizar Cliente
      try {
        const idUpdate = prompt("ID do cliente: ");
        const novoNome = prompt("Novo nome: ");
        await db.query("UPDATE cliente SET nome = ? WHERE id = ?", [
          novoNome,
          idUpdate,
        ]);
        console.log("Cliente atualizado!");
      } catch (err) {
        console.error("Erro ao atualizar cliente:", err);
      }
      break;

    case "4": // Deletar Cliente
      try {
        const idDel = prompt("ID do cliente: ");
        await db.query("DELETE FROM cliente WHERE id = ?", [idDel]);
        console.log("Cliente deletado!");
      } catch (err) {
        console.error("Erro ao deletar cliente:", err);
      }
      break;

    case "5": // Listar Pedidos
      try {
        const [pedidos] = await db.query(
          `SELECT p.id, p.nome, p.valor, c.nome AS cliente
           FROM pedido p
           JOIN cliente c ON p.cliente_id = c.id`
        );
        console.table(pedidos);
      } catch (err) {
        console.error("Erro ao listar pedidos:", err);
      }
      break;

    case "6": // Criar Pedido
      try {
        const clienteId = prompt("ID do cliente: ");
        const produto = prompt("Produto: ");
        const valor = prompt("Valor: ");
        await db.query(
          "INSERT INTO pedido (cliente_id, nome, valor) VALUES (?, ?, ?)",
          [clienteId, produto, valor]
        );
        console.log("Pedido criado!");
      } catch (err) {
        console.error("Erro ao criar pedido:", err);
      }
      break;

    case "0":
      console.log("Saindo...");
      process.exit();

    default:
      console.log("Opção inválida!");
  }

  await menu();
}

menu();
