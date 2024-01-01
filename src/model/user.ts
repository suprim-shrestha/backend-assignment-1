import { ISignUp } from "../interface/auth";

export const users = [
  {
    id: 1,
    username: "user1",
    password: "$2b$10$xm48I4u9/4UCaTCfQY1qkubMU14wEXF.cUsCd7sIUhYeBKb27gvS2",
    accessToken: "",
    refreshToken: "",
  },
  {
    id: 2,
    username: "user2",
    password: "$2b$10$FnsCiKVmXRaaSPTuFlvOIOGuyF7RGvyphReCnL/ppXIRrwesHo3fy",
    accessToken: "",
    refreshToken: "",
  },
  {
    id: 3,
    username: "user3",
    password: "$2b$10$hIxcHSQOsT9g/wfNGMHkg.TbnRBXDpwo9zKUZ/dCneSEHI2uf5fZm",
    accessToken: "",
    refreshToken: "",
  },
];

export function getUsers() {
  const data = users.map((user) => ({ id: user.id, username: user.username }));

  return data;
}

export function getUserById(id: number) {
  const user = users
    .map((user) => ({ id: user.id, username: user.username }))
    .find(({ id: userId }) => userId === id);
  return user;
}

export function getUserByUsername(username: string) {
  const user = users.find(
    ({ username: userUsername }) => userUsername === username
  );
  return user;
}

export function createUser(user: ISignUp) {
  const newUser = {
    id: users[users.length - 1].id + 1,
    ...user,
    accessToken: "",
    refreshToken: "",
  };

  users.push(newUser);

  return newUser;
}

export function updateUser(id: number, userDetail: any) {
  let user = users.find(({ id: userId }) => userId === id);
  user = userDetail;

  return user;
}
