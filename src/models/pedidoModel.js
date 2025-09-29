const db = require("../config/db");

const PedidoModel = {
  // Criar pedido
  create: (pedido, callback) => {
    const query = "INSERT INTO pedido (name, valor, cliente_id) VALUES (?, ?, ?)";
    db.query(query, [pedido.name, pedido.valor, pedido.cliente_id], (err, result) => {
      if (err) return callback(err, null);
      console.log("Pedido criado:", result);
      callback(null, result);
    });
  },

  // Buscar todos os pedidos
  findAll: (callback) => {
    const query = "SELECT id, name, valor, cliente_id FROM pedido";
    db.query(query, (err, results) => {
      if (err) return callback(err, null);
      console.log("Lista de pedidos:", results);
      callback(null, results);
    });
  },

  // Buscar pedidos por cliente_id
  findByClienteId: (cliente_id, callback) => {
    const query = "SELECT id, name, valor, cliente_id FROM pedido WHERE cliente_id = ?";
    db.query(query, [cliente_id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  // Atualizar pedido
  update: (id, pedido, callback) => {
    const query = "UPDATE pedido SET name = ?, valor = ? WHERE id = ?";
    db.query(query, [pedido.name, pedido.valor, id], (err, result) => {
      if (err) return callback(err, null);
      console.log("Pedido atualizado:", result);
      callback(null, result);
    });
  },

  // Deletar pedido
  delete: (id, callback) => {
    const query = "DELETE FROM pedido WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) return callback(err, null);
      console.log("Pedido deletado:", result);
      callback(null, result);
    });
  },
};

module.exports = PedidoModel;
