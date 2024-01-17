import {
  CreateSessionDocument,
  CreateSessionInput,
  DeleteSessionDocument,
  FindSessionDocument,
  UpdateSessionDocument,
  UpdateSessionInput,
} from '@/generated/graphql';
import { AdapterSession } from 'next-auth/adapters';
import { client } from '../apollo/client';

export async function findSession(
  sessionToken: string,
): Promise<AdapterSession | null> {
  const data = await client.query({
    query: FindSessionDocument,
    variables: {
      sessionToken,
    },
  });
  const session = data.data?.findSession;
  return session
    ? ({
        ...session,
        expires: new Date(session.expires),
      } as AdapterSession)
    : null;
}

export async function createSession(input: CreateSessionInput) {
  await client.mutate({
    mutation: CreateSessionDocument,
    variables: {
      input,
    },
  });
}

export async function updateSession(input: UpdateSessionInput) {
  await client.mutate({
    mutation: UpdateSessionDocument,
    variables: {
      input,
    },
  });
}

export async function deleteSession(sessionToken: string) {
  await client.mutate({
    mutation: DeleteSessionDocument,
    variables: {
      sessionToken,
    },
  });
}
