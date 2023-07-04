import express from "express";
const router = express.Router();

// router.post("/register").post((req, res) => {});
router.route("/register").post((req, res) => {
  res.send("hello from register api");
});

// login route
router.route("/login").post((req, res) => {
  res.send("hello from login api");
});

export default router;
