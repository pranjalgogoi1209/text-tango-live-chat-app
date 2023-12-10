import express from "express";
import chatController from "../controllers/chatController.js";
const router = express.Router();

router.get("/getChats/:id", chatController.getAllChats);
router.post("/newChat", chatController.addNewChat);
router.put("/updateChat", chatController.updateChat);
router.delete("/deleteChat", chatController.deleteChat);
router.post("/newChatMessage", chatController.newChatMessage);
router.delete("/deleteMessage", chatController.deleteMessage);

export default router;