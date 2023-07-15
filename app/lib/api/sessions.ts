import { User, Session } from "prisma";
import { client } from "../client";

type CreateUserBody = {
  username: string
}

export async function createUser(user: CreateUserBody) { 
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

type UpdateUserBody = {
  username: string
}

export async function updateUser(id: string, body: UpdateUserBody) {
  const res = await client.patch<User>(`/users/${id}`, body);
  return res.data;
};

export async function deleteUser(id: string) {
  const res = await client.delete<User>(`/users/${id}`);
  return res.data;
};

type CreateSessionBody = {
  sessionToken: string
  userId: string
  expires: Date
}

export async function createSession(body: CreateSessionBody) {
  const res = await client.post<Session>('/sessions', body);
  return res.data;
}

type SessionAndUser = {
  session: Session
  user: User
}

export async function getSessionAndUser(sessionToken: string) {
  const res = await client.get<SessionAndUser>(`/sessions?sessionToken=${sessionToken}`);
  return res.data;
}

export async function updateSession(session: Session) {
  const res = await client.patch<Session>(`/sessions`, session);
  return res.data;
}

export async function deleteSession(sessionToken: string) {
  const res = await client.delete<Session>(`/sessions?sessionToken=${sessionToken}`);
  return res.data;
}