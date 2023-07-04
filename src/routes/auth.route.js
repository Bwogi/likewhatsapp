import express from "express";
import {
  login,
  logout,
  refreshToken,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Register
// router.post("/register").post((req, res) => {});
/* router.route("/register").post((req, res) => {
   res.send("hello from register api");
 }); */
router.route("/register").post(register);

// Login
/* router.route("/login").post((req, res) => {
  res.send("hello from login api");
}); */
router.route("/login").post(login);

// Logout
router.route("/logout").post(logout);

// Refresh token
router.route("/refreshToken").post(refreshToken);

export default router;
