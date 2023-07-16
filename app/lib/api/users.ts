import { User } from 'prisma';
import { client } from '../client';

type CreateUserBody = {
  username: string;
};

export async function createUser(user: CreateUserBody) {
  const res = await client.post<User>(`/users`, user);
  return res.data;
}

export async function getUser(id: string) {
  const res = await client.get<User>(`/users/${id}`);
  return res.data;
}

export async function getUserBySocailAccount(
  socialId: string,
  provider: string,
) {
  const res = await client.get<User>(
    `/users?socialId=${socialId}&provider=${provider}`,
  );
  return res.data;
}

type UpdateUserBody = {
  username: string;
};

export async function updateUser(id: string, body: UpdateUserBody) {
  const res = await client.patch<User>(`/users/${id}`, body);
  return res.data;
}

export async function deleteUser(id: string) {
  const res = await client.delete<User>(`/users/${id}`);
  return res.data;
}
