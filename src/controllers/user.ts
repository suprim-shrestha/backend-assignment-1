import { Request, Response } from "express";

import * as userService from "../services/user";

export function getUsers(req: Request, res: Response) {
  const data = userService.getUsers();

  return res.json({
    data,
  });
}

export function getUserById(req: Request, res: Response) {
  const id = req.params.id;

  const data = userService.getUserById(parseInt(id));

  return res.json({
    data,
  });
}
