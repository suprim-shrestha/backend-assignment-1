import { ISignUp } from "../interface/auth";
import * as userModel from "../model/user";

export function getUsers() {
  return userModel.getUsers();
}

export function getUserById(id: number) {
  return userModel.getUserById(id);
}

export function getUserByUsername(username: string) {
  return userModel.getUserByUsername(username);
}

export function createUser(user: ISignUp) {
  return userModel.createUser(user);
}

export function updateUser(id: number, userDetail: Object) {
  return userModel.updateUser(id, userDetail);
}
