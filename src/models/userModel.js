const db = require("../config/connection");

const UserModel = {
  // CREATE
  create: (user, callback) => {
    const query = "INSERT INTO users (name, email) VALUES (?, ?)";
    db.query(query, [user.name, user.email], (err, result) => {
      if (err) return callback(err, null);
      console.log("Usuário criado:", result);
      callback(null, result);
    });
  },

  // READ
  findAll: (callback) => {
    const query = "SELECT * FROM users";
    db.query(query, (err, results) => {
      if (err) return callback(err, null);
      console.log("Usuários encontrados:", results);
      callback(null, results);
    });
  },

  // UPDATE
  update: (id, user, callback) => {
    const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    db.query(query, [user.name, user.email, id], (err, result) => {
      if (err) return callback(err, null);
      console.log("Usuário atualizado:", result);
      callback(null, result);
    });
  },

  // DELETE
  delete: (id, callback) => {
    const query = "DELETE FROM users WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) return callback(err, null);
      console.log("Usuário deletado:", result);
      callback(null, result);
    });
  },
};

module.exports = UserModel;
