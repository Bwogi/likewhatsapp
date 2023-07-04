import express from "express";
const router = express.Router();
router.post("/new", (req, res) => {
  res.send("welcome to the new chat api");
});
export default router;
