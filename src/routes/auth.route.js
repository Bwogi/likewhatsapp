import express from "express";
import {
  login,
  logout,
  refreshToken,
  register,
} from "../controllers/auth.controller.js";
import trimRequest from "trim-request";

const router = express.Router();

// Register
// router.post("/register").post((req, res) => {});
/* router.route("/register").post((req, res) => {
   res.send("hello from register api");
 }); */
router.route("/register").post(trimRequest.all, register);

// Login
/* router.route("/login").post((req, res) => {
  res.send("hello from login api");
}); */
router.route("/login").post(trimRequest.all, login);

// Logout
router.route("/logout").post(trimRequest.all, logout);

// Refresh token
router.route("/refreshToken").post(trimRequest.all, refreshToken);

export default router;
