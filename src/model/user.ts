import BaseModel from "./baseModel";
import { ISignUp } from "../interface/auth";
import { GetUsersFilterQuery } from "../interface/user";

export default class UserModel extends BaseModel {
  static async getUsers(params: GetUsersFilterQuery) {
    const query = this.queryBuilder()
      .select({
        id: "id",
        username: "username",
      })
      .whereRaw("LOWER(username) like ?", [
        `%${params.username.toLowerCase()}%`,
      ])
      .from("users");

    query.offset(params.offset).limit(params.limit);

    return query;
  }

  static async countAll(params: GetUsersFilterQuery) {
    return this.queryBuilder()
      .table("users")
      .whereRaw("LOWER(username) like ?", [
        `%${params.username.toLowerCase()}%`,
      ])
      .count({ count: "id" })
      .first();
  }

  static async getUserById(id: number) {
    return this.queryBuilder()
      .select({
        id: "id",
        username: "username",
      })
      .from("users")
      .where({ id })
      .first();
  }

  static async getUserByUsername(username: string) {
    const user = await this.queryBuilder()
      .select({
        id: "id",
        username: "username",
        password: "password",
      })
      .from("users")
      .where({ username });

    return user?.[0];
  }

  static async createUser(user: ISignUp) {
    return this.queryBuilder().insert(user).table("users");
  }

  static async updateUser(id: number, user: ISignUp) {
    return this.queryBuilder().update(user).table("users").where({ id });
  }

  static async deleteUser(id: number) {
    return this.queryBuilder().table("users").where({ id }).del();
  }
}
