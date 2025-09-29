const PostModel = require("../models/pedidoModel");

const PedidoController = {
  // Criar um novo post
  createPedido: (req, res) => {
    const { name, valor, cliente_id } = req.body;

    if (!title || !content || !user_id) {
      return res.status(400).json({ error: "Campos obrigatórios: nome, valor, cliente_id" });
    }

    PostModel.create({ title, content, user_id }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao criar pedido" });
      res.status(201).json({ message: "Pedido criado com sucesso!", data: result });
    });
  },

  // Buscar todos os posts
  getAllPosts: (req, res) => {
    PedidoModel.findAll((err, results) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar pedidos" });
      res.status(200).json(results);
    });
  },

  // Buscar posts por ID de usuário
  getPostsByUserId: (req, res) => {
    const { userId } = req.params;
    PostModel.findByUserId(userId, (err, results) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar pedidos do usuário" });
      res.status(200).json(results);
    });
  },

  // Atualizar post
  updatePost: (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    PostModel.update(id, { title, content }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao atualizar pedido" });
      res.status(200).json({ message: "Pedido atualizado com sucesso!", data: result });
    });
  },

  // Deletar post
  deletePost: (req, res) => {
    const { id } = req.params;
    PostModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao deletar pedido" });
      res.status(200).json({ message: "Pedido deletado com sucesso!", data: result });
    });
  },
};

module.exports = PostController;
