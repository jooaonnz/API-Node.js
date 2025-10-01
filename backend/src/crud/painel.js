const prompt = require("prompt-sync")({ sigint: true });
const { Cliente } = require("../models/userModel");
const { Pedido } = require("../models/pedidoModel");
const connection = require("../config/connection");

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
    case "1":
      const clientes = await Cliente.findAll();
      console.log(clientes.map((c) => c.toJSON()));
      break;
    case "2":
      const nome = prompt("Nome: ");
      const email = prompt("Email: ");
      await Cliente.create({ nome, email });
      console.log("Cliente criado com sucesso!");
      break;
    case "3":
      const idUpdate = prompt("ID do cliente: ");
      const novoNome = prompt("Novo nome: ");
      await Cliente.update({ nome: novoNome }, { where: { id: idUpdate } });
      console.log("Cliente atualizado!");
      break;
    case "4":
      const idDel = prompt("ID do cliente: ");
      await Cliente.destroy({ where: { id: idDel } });
      console.log("Cliente deletado!");
      break;
    case "5":
      const pedidos = await Pedido.findAll({ include: Cliente });
      console.log(pedidos.map((p) => p.toJSON()));
      break;
    case "6":
      const clienteId = prompt("ID do cliente: ");
      const produto = prompt("Produto: ");
      const valor = prompt("Valor: ");
      await Pedido.create({ cliente_id: clienteId, produto, valor });
      console.log("Pedido criado!");
      break;
    case "0":
      process.exit();
    default:
      console.log("Opção inválida!");
  }

  menu();
}

// conectar banco e iniciar
(async () => {
  try {
    await require("../models").sequelize.sync(); // se usa Sequelize
    menu();
  } catch (err) {
    console.error("Erro ao rodar crud:", err);
  }
})();
