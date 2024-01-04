import NotFoundError from "../error/notFoundError";
import { ISignUp } from "../interface/auth";
import UserModel from "../model/user";
import { GetAllUsersQuery } from "../interface/user";
import { buildMeta, getPaginationOptions } from "../util/pagination";

export async function getUsers(query: GetAllUsersQuery) {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });

  const users = await UserModel.getUsers({ ...pageDetails, ...query });
  const count = await UserModel.countAll({ ...pageDetails, ...query });

  const total = count.count;

  const meta = buildMeta(total, size, page);

  return {
    data: users,
    meta,
  };
}

export async function getUserById(id: number) {
  const user = UserModel.getUserById(id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  return user;
}

export async function getUserByUsername(username: string) {
  return UserModel.getUserByUsername(username);
}

export async function createUser(user: ISignUp) {
  return UserModel.createUser(user);
}

export async function updateUser(id: number, userDetail: ISignUp) {
  const user = UserModel.getUserById(id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  await UserModel.updateUser(id, userDetail);

  const updatedUser = await UserModel.getUserById(id);

  return updatedUser;
}

export async function deleteUser(id: number) {
  const user = UserModel.getUserById(id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  await UserModel.deleteUser(id);
}
