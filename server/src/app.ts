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
import propertiesRouter from './routes/properties';
import ordinaryUsersRouter from './routes/users';

const connectDB = require("./database/database");
connectDB();


const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use('/', indexRouter);
app.use('/superadmin', usersRouter);
app.use('/agents', agentsRouter);
app.use('/properties', propertiesRouter)

app.use('/users', ordinaryUsersRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  });
}

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
