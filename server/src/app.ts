import express, { NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";

import "dotenv/config";
import agentsRouter from "./routes/agentRoute";
// const dotEnv = dotenv.config();


import path from 'path';

import indexRouter from'./routes/index';
import usersRouter from "./routes/superadmin";
import propertiesRouter from './routes/properties'
const connectDB = require("./database/database");
connectDB();


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use('/', indexRouter);
app.use('/superadmin', usersRouter);
app.use('/agents', agentsRouter);
app.use('/properties', propertiesRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err,
  });
});

export default app;
