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

// http error handling
app.use(async (err, req, res, next) => {});

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the Server!");
});

app.post("/test1", (req, res) => {
  res.send(req.body);
});

export default app;
