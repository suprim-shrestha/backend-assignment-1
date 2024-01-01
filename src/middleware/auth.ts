import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import config from "../config";
import { getUserByUsername } from "../model/user";

export const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] as string;

    if (!token) {
      return res.status(401).json({ message: "Token not Found" });
    }

    const payload: any = jwt.verify(token, config.jwt.accessTokenSecret!);

    if (!payload || payload.tokenType == "refreshToken") {
      throw new Error("Wrong token type");
    }
    const user = getUserByUsername(payload.username);
    if (user?.accessToken === token) {
      req.user = user;
    } else {
      throw new Error("Authentication failed");
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Authentication failed",
    });
  }
};
