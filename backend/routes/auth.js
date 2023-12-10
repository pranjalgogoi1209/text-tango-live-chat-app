import express from "express"
import userController from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", userController.newUser);
router.post("/signin", userController.getUser);

export default router;