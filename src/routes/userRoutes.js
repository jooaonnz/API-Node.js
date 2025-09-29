const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Rotas CRUD
router.post("/", UserController.createUser);     // Create
router.get("/", UserController.getAllUsers);     // Read
router.put("/:id", UserController.updateUser);   // Update
router.delete("/:id", UserController.deleteUser); // Delete

module.exports = router;
