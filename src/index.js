import dotenv from "dotenv";
import app from "./app.js";

// dotenv config
dotenv.config();

// environment variables
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
