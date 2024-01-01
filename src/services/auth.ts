import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { ISignUp } from "../interface/auth";
import config from "../config";
import * as userService from "./user";

export async function signup(body: ISignUp) {
  const user = userService.getUserByUsername(body.username);

  if (user) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(body.password, config.saltRounds);

  const newUser = userService.createUser({
    username: body.username,
    password: hashedPassword,
  });

  return newUser;
}

export async function login(body: ISignUp) {
  const userDetail = userService.getUserByUsername(body.username);

  if (!userDetail) {
    throw new Error("Unauthorized");
  }

  const passwordMatch = await bcrypt.compare(
    body.password,
    userDetail.password
  );

  if (!passwordMatch) {
    throw new Error("Unauthorized");
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

  userService.updateUser(userDetail.id, userDetail);

  return userDetail;
}

export async function reGenerateToken(token: string) {
  const payload: any = jwt.verify(token, config.jwt.refreshTokenSecret!);
  const userDetail = userService.getUserByUsername(payload.username)!;

  if (!payload || payload.tokenType !== "refreshToken") {
    throw new Error("Invalid token");
  }

  if (userDetail.refreshToken !== token) {
    throw new Error("Invalid token");
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

  userService.updateUser(payload.id, userDetail);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
    message: "Token Refreshed",
  };
}

export async function logout(username: string) {
  const user = userService.getUserByUsername(username)!;
  user.accessToken = "";
  user.refreshToken = "";
  console.log(user);
}
