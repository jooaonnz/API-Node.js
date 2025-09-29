const db = require("../config/db");

const PedidoModel = {
  // Criar post//id ver
  create: (post, callback) => {
    const query = "INSERT INTO pedido (name,valor , cliente_id) VALUES (?, ?, ?)";
    db.query(query, [post.name, post.valor, post.cliente_id], (err, result) => {
      if (err) return callback(err, null);
      console.log("Post criado:", result);
      callback(null, result);
    });
  },

  // Buscar todos os posts com dados do usuário //verificar esse get
  findAll: (callback) => {
    const query = `
      SELECT posts.id, posts.title, posts.content, users.name AS user_name, users.email AS user_email
      FROM posts
      INNER JOIN users ON posts.user_id = users.id
    `;
    db.query(query, (err, results) => {
      if (err) return callback(err, null);
      console.log("Lista de pedidos:", results);
      callback(null, results);
    });
  },

  // Buscar posts por usuário
  findByUserId: (userId, callback) => {
    const query = `
      SELECT posts.id, posts.title, posts.content
      FROM posts
      WHERE posts.user_id = ?
    `;
    db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  // Atualizar post
  update: (id, post, callback) => {
    const query = "UPDATE pedido SET title = ?, content = ? WHERE id = ?";
    db.query(query, [post.title, post.content, id], (err, result) => {
      if (err) return callback(err, null);
      console.log("pedido atualizado:", result);
      callback(null, result);
    });
  },

  // Deletar post
  delete: (id, callback) => {
    const query = "DELETE FROM pedido WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) return callback(err, null);
      console.log("pedido deletado:", result);
      callback(null, result);
    });
  },
};

module.exports = PostModel;
