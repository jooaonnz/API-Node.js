const UserModel = require("../models/userModel");

const UserController = {
  // Criar usuário
  createUser: (req, res) => {
    const { name, email } = req.body;
    UserModel.create({ name, email }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao criar usuário" });
      res.status(201).json({ message: "Usuário criado com sucesso!", data: result });
    });
  },

  // Buscar todos
  getAllUsers: (req, res) => {
    UserModel.findAll((err, results) => {
      if (err) return res.status(500).json({ error: "Erro ao buscar usuários" });
      res.status(200).json(results);
    });
  },

  // Atualizar
  updateUser: (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    UserModel.update(id, { name, email }, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao atualizar usuário" });
      res.status(200).json({ message: "Usuário atualizado com sucesso!", data: result });
    });
  },

  // Deletar
  deleteUser: (req, res) => {
    const { id } = req.params;
    UserModel.delete(id, (err, result) => {
      if (err) return res.status(500).json({ error: "Erro ao deletar usuário" });
      res.status(200).json({ message: "Usuário deletado com sucesso!", data: result });
    });
  },
};

module.exports = UserController;
