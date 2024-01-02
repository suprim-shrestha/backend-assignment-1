import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import config from "../config";
import { getUserByUsername } from "../model/user";
import UnauthenticatedError from "../error/unauthenticatedError";

export const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] as string;

    if (!token) {
      throw new UnauthenticatedError("No access token");
    }

    const payload: any = jwt.verify(token, config.jwt.accessTokenSecret!);

    const user = getUserByUsername(payload.username);
    if (user?.accessToken === token) {
      req.user = user;
    } else {
      throw new UnauthenticatedError("Unauthorized");
    }

    next();
  } catch (error) {
    next(error);
  }
};
