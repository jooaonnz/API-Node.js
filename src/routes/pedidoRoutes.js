const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");

// Criar post
router.post("/", PostController.createPost);

// Listar todos os posts
router.get("/", PostController.getAllPosts);

// Listar posts de um usuário específico
router.get("/user/:userId", PostController.getPostsByUserId);

// Atualizar post
router.put("/:id", PostController.updatePost);

// Deletar post
router.delete("/:id", PostController.deletePost);

module.exports = router;
