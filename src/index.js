import app from "./app.js";
import logger from "./configs/logger.config.js";
import mongoose from "mongoose";

// environment variables
const port = process.env.PORT || 7000;
const { DATABASE_URL } = process.env;

// in case of any mongodb errors
mongoose.connection.on("error", (error) => {
  logger.error(`Mongodb connection error: ${error}`);
  // close the connection
  process.exit(1);
});

// mongodb debug mode enabled - development mode only
if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

// mongodb connection
mongoose
  .connect(DATABASE_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB.");
  });

let server = app.listen(port, () => {
  logger.info(`process id: ${process.pid}`);
  // console.log(`Server is running http://localhost:${port}`);
  logger.info(`Server is running on http://localhost:${port}`);
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
