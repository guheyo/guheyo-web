import { client } from '@/lib/apollo/client';
import {
  CreateUserDocument,
  CreateUserInput,
  DeleteUserDocument,
  FindMyUserByIdDocument,
  FindMyUserBySessionDocument,
  FindMyUserBySocialAccountDocument,
  UpdateUserDocument,
  UpdateUserInput,
} from '@/generated/graphql';

export async function findUser(id: string) {
  const data = await client.query({
    query: FindMyUserByIdDocument,
    variables: {
      id,
    },
  });
  return data.data?.findMyUserById;
}

export async function findUserBySocailAccount(
  socialId: string,
  provider: string,
) {
  const data = await client.query({
    query: FindMyUserBySocialAccountDocument,
    variables: {
      provider,
      socialId,
    },
  });
  return data.data?.findMyUserBySocialAccount;
}

export async function findUserBySession(sessionToken: string) {
  const data = await client.query({
    query: FindMyUserBySessionDocument,
    variables: {
      sessionToken,
    },
  });
  return data.data?.FindMyUserBySessionDocument;
}

export async function createUser(input: CreateUserInput) {
  await client.mutate({
    mutation: CreateUserDocument,
    variables: {
      input,
    },
  });
}

export async function updateUser(input: UpdateUserInput) {
  await client.mutate({
    mutation: UpdateUserDocument,
    variables: {
      input,
    },
  });
}

export async function deleteUser(id: string) {
  await client.mutate({
    mutation: DeleteUserDocument,
    variables: {
      id,
    },
  });
}
