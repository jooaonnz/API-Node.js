const express = require("express");
const router = express.Router();
const PedidoController = require("../controllers/pedidoController");

// Criar post
router.post("/", PedidoController.createPedido);

// Listar todos os posts
router.get("/", PedidoController.getAllPedidos);

// Listar posts de um usuário específico
router.get("/user/:userId", PedidoController.getPedidoByClienteId);

// Atualizar post
router.put("/:id", PedidoController.updatePedido);

// Deletar post
router.delete("/:id", PedidoController.deletePedido);

module.exports = router;
