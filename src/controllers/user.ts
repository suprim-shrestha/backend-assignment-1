import { Request, Response } from "express";

// import * as userService from "../service/user";

export function getUsers(req: Request, res: Response) {
  const params = req.query;
  return res.json({
    message: "getUsers",
    data: params,
  });
}

export function getUserById(req: Request, res: Response) {
  const id = +req.params.id;
  return res.json({
    message: `User id: ${id}`,
  });
}
