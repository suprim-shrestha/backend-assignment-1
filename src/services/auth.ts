import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { ISignUp } from "../interface/auth";
import config from "../config";
import * as userService from "./user";
import ConflictError from "../error/conflictError";
import NotFoundError from "../error/notFoundError";
import UnauthenticatedError from "../error/unauthenticatedError";

export async function signup(body: ISignUp) {
  const user = await userService.getUserByUsername(body.username);

  if (user) {
    throw new ConflictError("User already exists");
  }

  const hashedPassword = await bcrypt.hash(body.password, config.saltRounds);

  const newUser = await userService.createUser({
    username: body.username,
    password: hashedPassword,
  });

  return newUser;
}

export async function login(body: ISignUp) {
  const userDetail = await userService.getUserByUsername(body.username);

  if (!userDetail) {
    throw new NotFoundError("User Not Found");
  }

  const passwordMatch = await bcrypt.compare(
    body.password,
    userDetail.password
  );

  if (!passwordMatch) {
    throw new UnauthenticatedError("Username and password does not match");
  }

  const user = {
    id: userDetail.id,
    username: userDetail.username,
    tokenType: "accessToken",
  };

  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret!, {
    expiresIn: config.jwt.accessTokenExpiry,
  });

  user.tokenType = "refreshToken";
  const refreshToken = jwt.sign(user, config.jwt.refreshTokenSecret!, {
    expiresIn: config.jwt.refreshTokenExpiry,
  });

  userDetail.accessToken = accessToken;
  userDetail.refreshToken = refreshToken;

  await userService.updateUser(userDetail.id, userDetail);

  return userDetail;
}

export async function reGenerateToken(token: string) {
  const payload: any = jwt.verify(token, config.jwt.refreshTokenSecret!);
  const userDetail = await userService.getUserByUsername(payload.username)!;

  if (!userDetail) {
    throw new NotFoundError("User Not Found");
  }

  if (userDetail.refreshToken !== token) {
    throw new UnauthenticatedError("Invalid token");
  }

  delete payload.iat;
  delete payload.exp;
  delete payload.tokenType;

  payload.tokenType = "accessToken";
  const accessToken = jwt.sign(payload, config.jwt.accessTokenSecret!, {
    expiresIn: config.jwt.accessTokenExpiry,
  });

  payload.tokenType = "refreshToken";
  const refreshToken = jwt.sign(payload, config.jwt.refreshTokenSecret!, {
    expiresIn: config.jwt.refreshTokenExpiry,
  });

  userDetail.accessToken = accessToken;
  userDetail.refreshToken = refreshToken;

  await userService.updateUser(payload.id, userDetail);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
    message: "Token Refreshed",
  };
}

export async function logout(username: string) {
  const user = await userService.getUserByUsername(username)!;

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  user.accessToken = "";
  user.refreshToken = "";
}
