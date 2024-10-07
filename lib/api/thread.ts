import {
  CreateThreadDocument,
  CreateThreadInput,
  CreateThreadMutation,
  DeleteThreadDocument,
  DeleteThreadMutation,
  FindThreadDocument,
  FindThreadQuery,
  UpdateThreadDocument,
  UpdateThreadInput,
  UpdateThreadMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createThread(input: CreateThreadInput) {
  return client.mutate<CreateThreadMutation>({
    mutation: CreateThreadDocument,
    variables: {
      input,
    },
  });
}

export async function updateThread(input: UpdateThreadInput) {
  return client.mutate<UpdateThreadMutation>({
    mutation: UpdateThreadDocument,
    variables: {
      input,
    },
  });
}

export async function deleteThread(id: string) {
  return client.mutate<DeleteThreadMutation>({
    mutation: DeleteThreadDocument,
    variables: {
      id,
    },
  });
}

export async function findThread(id: string) {
  return client.query<FindThreadQuery>({
    query: FindThreadDocument,
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });
}
