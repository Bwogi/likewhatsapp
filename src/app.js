import express from "express";
const app = express();

// routes
app.get("/", (req, res) =>
  res.send("The Server is here! Where is your content?!")
);

app.post("/test", (req, res) =>
  res.send("The Server is here! Where is your content?!")
);

export default app;
