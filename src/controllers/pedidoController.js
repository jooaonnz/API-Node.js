const PostModel = require("../models/postModel");

const PostController = {
  // Criar um novo post
  createPost: (req, res) => {
    const { title, content, user_id } = req.body;

    if (!title || !content || !user_id) {
      return res.status(400).json({ error: "Campos obrigatórios: title, content, user_id" });
    }

    PostModel.create({ title, content, user_id }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao criar post" });
      res.status(201).json({ message: "Post criado com sucesso!", data: result });
    });
  },

  // Buscar todos os posts
  getAllPosts: (req, res) => {
    PostModel.findAll((err, results) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar posts" });
      res.status(200).json(results);
    });
  },

  // Buscar posts por ID de usuário
  getPostsByUserId: (req, res) => {
    const { userId } = req.params;
    PostModel.findByUserId(userId, (err, results) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar posts do usuário" });
      res.status(200).json(results);
    });
  },

  // Atualizar post
  updatePost: (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    PostModel.update(id, { title, content }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao atualizar post" });
      res.status(200).json({ message: "Post atualizado com sucesso!", data: result });
    });
  },

  // Deletar post
  deletePost: (req, res) => {
    const { id } = req.params;
    PostModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao deletar post" });
      res.status(200).json({ message: "Post deletado com sucesso!", data: result });
    });
  },
};

module.exports = PostController;
