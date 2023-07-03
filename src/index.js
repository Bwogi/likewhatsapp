import app from "./app.js";
import logger from "./configs/logger.config.js";

// environment variables
const port = process.env.PORT || 7000;

let server = app.listen(port, () => {
  // console.log(`Server is running http://localhost:${port}`);
  logger.info(`Server is running on http://localhost:${port}`);
  console.log("process id: ", process.pid);
  // throw new Error(`Andrew, there is a Server Error`);
});

// handle server errors
const exitHandler = () => {
  // if the server process is still running, shut it down.
  if (server) {
    logger.info("Server shutdown.");
    process.exit(1);
  } else {
    // if the server process is still running and you want to shut it down using this function, lets shut it down then.
    process.exit(1);
  }
};
const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};
process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

// graceful shutdown - SIGTERM - Signal termination
process.on("SIGTERM", () => {
  if (server) {
    logger.info("Server shutdown.");
    process.exit(1);
  }
});
process.on("SIGTERM", exitHandler);
