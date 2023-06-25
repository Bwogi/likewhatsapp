import app from "./app.js";
import logger from "./configs/logger.config.js";

// environment variables
const port = process.env.PORT || 7000;

app.listen(port, () => {
  // console.log(`Server is running http://localhost:${port}`);
  logger.info(`Server is running on http://localhost:${port}`);
});
