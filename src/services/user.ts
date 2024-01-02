import NotFoundError from "../error/notFoundError";
import { ISignUp } from "../interface/auth";
import * as userModel from "../model/user";

export async function getUsers() {
  return userModel.getUsers();
}

export async function getUserById(id: number) {
  const user = userModel.getUserById(id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  return user;
}

export async function getUserByUsername(username: string) {
  return userModel.getUserByUsername(username);
}

export async function createUser(user: ISignUp) {
  return userModel.createUser(user);
}

export async function updateUser(id: number, userDetail: Object) {
  const user = userModel.updateUser(id, userDetail);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  return user;
}
