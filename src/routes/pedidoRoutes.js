const express = require("express");
const router = express.Router();
const PedidoController = require("../controllers/pedidoController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       required:
 *         - cliente_id
 *         - produto
 *         - quantidade
 *         - valor
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do pedido
 *         cliente_id:
 *           type: integer
 *           description: ID do cliente que fez o pedido
 *         produto:
 *           type: string
 *           description: Nome ou descrição do produto
 *         quantidade:
 *           type: integer
 *           description: Quantidade de itens
 *         valor:
 *           type: number
 *           format: float
 *           description: Valor total do pedido
 *       example:
 *         id: 1
 *         cliente_id: 2
 *         produto: "Notebook Dell Inspiron"
 *         quantidade: 1
 *         valor: 3500.00
 */

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: API de gerenciamento de pedidos
 */

/**
 * @swagger
 * /api/pedidos:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", PedidoController.createPedido);

/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de todos os pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pedido'
 */
router.get("/", PedidoController.getAllPedidos);

/**
 * @swagger
 * /api/pedidos/user/{userId}:
 *   get:
 *     summary: Listar pedidos de um cliente específico
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Lista de pedidos do cliente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Cliente não encontrado
 */
router.get("/user/:cliente_id", PedidoController.getPedidoByClienteId);

/**
 * @swagger
 * /api/pedidos/{id}:
 *   put:
 *     summary: Atualizar um pedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       404:
 *         description: Pedido não encontrado
 */
router.put("/:id", PedidoController.updatePedido);

/**
 * @swagger
 * /api/pedidos/{id}:
 *   delete:
 *     summary: Deletar um pedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Pedido deletado com sucesso
 *       404:
 *         description: Pedido não encontrado
 */
router.delete("/:id", PedidoController.deletePedido);

module.exports = router;
