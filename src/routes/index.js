import express from "express";
import authRoutes from "./auth.route.js";
import chatRoutes from "./chat.route.js";

const router = express.Router();

router.use("/auth", authRoutes); // whenever we want to use auth routes, we prefix it with /auth ie http://localhost/auth/login or register...
router.use("/chat", chatRoutes);

export default router;
