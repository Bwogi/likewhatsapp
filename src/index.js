import app from "./app.js";

// environment variables
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
