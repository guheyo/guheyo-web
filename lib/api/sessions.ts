import { User, Session } from 'prisma';
import { client } from '../client';

type CreateSessionBody = {
  sessionToken: string;
  userId: string;
  expires: Date;
};

export async function createSession(body: CreateSessionBody) {
  const res = await client.post<Session>('/sessions', body);
  return res.data;
}

type SessionAndUser = {
  session: Session;
  user: User;
};

export async function getSessionAndUser(sessionToken: string) {
  const res = await client.get<SessionAndUser>(
    `/sessions?sessionToken=${sessionToken}`,
  );
  return res.data;
}

export async function updateSession(session: Session) {
  const res = await client.patch<Session>(`/sessions`, session);
  return res.data;
}

export async function deleteSession(sessionToken: string) {
  const res = await client.delete<Session>(
    `/sessions?sessionToken=${sessionToken}`,
  );
  return res.data;
}
