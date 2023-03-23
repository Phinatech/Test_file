import { Request, Response, NextFunction } from "express";
import { HTTP, mainAppErrorHandler } from "./errorDefiner";

const errorBuilder = (err: mainAppErrorHandler, res: Response) => {
  return res.status(HTTP.INTERNAL_SERVER_ERROR).json({
    name: err.name,
    message: err.message,
    status: HTTP.BAD_REQUEST,
    stack: err.stack,
  });
};

export const errorHandler = (
  err: mainAppErrorHandler,
  req: Request,
  res: Response,
) => {
  errorBuilder(err, res);
};
