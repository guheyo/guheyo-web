import {
  CreateGroupDocument,
  CreateGroupInput,
  CreateGroupMutation,
  FindGroupDocument,
  FindGroupQuery,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createGroup(input: CreateGroupInput) {
  return client.mutate<CreateGroupMutation>({
    mutation: CreateGroupDocument,
    variables: {
      input,
    },
  });
}

export async function findGroup(id: string) {
  return client.query<FindGroupQuery>({
    query: FindGroupDocument,
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });
}
