import { client } from "../client";
import { User } from "prisma";

type createUserBody = {
  username: string
}

export async function createUser(user: createUserBody) { 
  const res = await client.post<User>(`/users`, user);
  return res.data;
};

export async function getUser(id: string) {
  const res = await client.get<User>(`/users/${id}`);
  return res.data;
};

export async function getUserBySocailAccount(socialId: string, provider: string) {
  const res = await client.get<User>(`/users?socialId=${socialId}&provider=${provider}`);
  return res.data;
};

type updateUserBody = {
  username: string
}

export async function updateUser(id: string, body: updateUserBody) {
  const res = await client.patch<User>(`/users/${id}`, body);
  return res.data;
};

export async function deleteUser(id: string) {
  const res = await client.delete<User>(`/users/${id}`);
  return res.data;
};