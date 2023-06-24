import dotenv from "dotenv";
import express from "express";
const app = express();

// dotenv config
dotenv.config();

// routes
app.get("/", (req, res) =>
  res.send("The Server is here with Get! Where is your content?!")
);

app.post("/test", (req, res) =>
  res.send("The Server is here with POSt! Where is your content?!")
);

export default app;
