import { PaginationQuery } from "./pagination";

export interface GetAllUsersQuery extends PaginationQuery {
  username: string;
}

export interface GetUsersFilterQuery extends GetAllUsersQuery {
  limit: number;
  offset: number;
}
