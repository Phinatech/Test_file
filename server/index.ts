import express, { Application } from "express";
import mongoose from "mongoose";
import { mainApp } from "./mainApp";

const port: number = 3455;
const app: Application = express();

const url: string = "mongodb://0.0.0.0:27017/koraApi";

// mainApp(app);

const server = app.listen(port, () => {
  console.log("");
  console.log("server is ready");

  mongoose.connect(url).then(() => {
    console.log("db connected");
  });
});

// process.on("uncaughtException", (error: Error) => {
//   console.log("stop here: uncaughtException");
//   console.log(error);

//   process.exit(1);
// });

// process.on("unhandledRejection", (reason: any) => {
//   console.log("stop here: unhandledRejection");
//   console.log(reason);

//   server.close(() => {
//     process.exit(1);
//   });
// });
