import { Request, Response } from "express";

import * as authService from "../services/auth";

export async function signup(req: Request, res: Response) {
  const { body } = req;

  try {
    const newUser = await authService.signup(body);

    return res.json({
      message: "User signed up",
      newUser,
    });
  } catch (error) {
    return res.json({
      message: "Username already exists",
    });
  }
}

export async function login(req: Request, res: Response) {
  const { body } = req;

  try {
    const data = await authService.login(body);

    return res.json(data);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
}

export async function reGenerateToken(req: Request, res: Response) {
  const refreshToken = req.body.refreshToken;

  try {
    const data = await authService.reGenerateToken(refreshToken);

    return res.json(data);
  } catch (error) {
    return res.json({
      message: "Invalid token",
    });
  }
}

export async function logout(req: any, res: Response) {
  const user = req.user;
  await authService.logout(user.username);

  res.json({
    message: "User logged out",
  });
}
