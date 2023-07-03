import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";
import createHttpErrors from "http-errors";

const app = express();

// dotenv config
dotenv.config();

// middlewares
// Morgan - for functionality
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
// helmet - for security
app.use(helmet());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sanitise data requests
app.use(mongoSanitize());

// enable cookie parser
app.use(cookieParser());

//enable response compression(gzip compression)
app.use(compression());

// enable file upload
app.use(
  fileUpload({
    // creates a temporary folder for uploaded
    useTempFiles: true,
  })
);

// cors - to protect the server. In this case only a single origin is allowed to access the server(localhost:3000)
app.use(
  // cors({
  //   origin: "http://localhost:3000",
  // })
  cors()
);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the Server!");
});

app.post("/test", (req, res) => {
  // res.status(409).json({ message: "There is a conflict." });
  throw createHttpErrors.BadRequest("This route has an error!");
});

// http error handling
// a route that does not exist - http://localhost:8000/test32323
app.use(async (req, res, next) => {
  next(createHttpErrors.NotFound("This route does not exist"));
});

// a route that exists but has an error - http://localhost:8000/test
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

export default app;
