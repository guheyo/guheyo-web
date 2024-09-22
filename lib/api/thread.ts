import {
  CreateThreadDocument,
  CreateThreadInput,
  CreateThreadMutation,
  DeleteThreadDocument,
  DeleteThreadMutation,
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

export async function deleteThread(id: string) {
  return client.mutate<DeleteThreadMutation>({
    mutation: DeleteThreadDocument,
    variables: {
      id,
    },
  });
}
