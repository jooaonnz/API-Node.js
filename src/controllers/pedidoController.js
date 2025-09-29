const PedidoModel = require("../models/pedidoModel");

const PedidoController = {
  // Criar um novo post
  createPedido: (req, res) => {
    const { name, valor, cliente_id } = req.body;
    if (!name || !valor || !cliente_id) {
      return res.status(400).json({ error: "Campos obrigatórios: name, valor, cliente_id" });
    }
    PedidoModel.create({ name, valor, cliente_id }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao criar pedido" });
      res.status(201).json({ message: "Pedido criado com sucesso!", data: result });
    });
  },

  // Buscar todos os posts
  getAllPedidos: (req, res) => {
    PedidoModel.findAll((err, results) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar pedidos" });
      res.status(200).json(results);
    });
  },

  // Buscar posts por ID de usuário
  getPedidosByClienteId: (req, res) => {
    const { cliente_id } = req.params;
    PedidoModel.findByClienteId(cliente_id, (err, results) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar pedidos do cliente" });
      res.status(200).json(results);
    });
  },

  // Atualizar post
  updatePedido: (req, res) => {
    const { id } = req.params;
    const { name, valor } = req.body;
    PedidoModel.update(id, { name, valor }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao atualizar pedido" });
      res.status(200).json({ message: "Pedido atualizado com sucesso!", data: result });
    });
  },

  // Deletar post
  deletePedido: (req, res) => {
    const { id } = req.params;
    PedidoModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao deletar pedido" });
      res.status(200).json({ message: "Pedido deletado com sucesso!", data: result });
    });
  },
};

module.exports = PedidoController;
