import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { HTTP, mainAppErrorHandler } from "./utils/error/errorDefiner";
import { errorHandler } from "./utils/error/errorHandlers";

export const mainApp = (app: Application) => {
  app
    .use(express.json())
    .use(cors())

    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainAppErrorHandler({
          message: `This route ${req.url} doesn't exist`,
          status: HTTP.NOT_FOUND,
          name: "Route Error",
          isSuccess: false,
        }),
      );
    })

    .use(errorHandler);
};
