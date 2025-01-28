import { NextFunction, Request, Response } from "express";

export const controllerWrapper = (wrappedFunction) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await wrappedFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
