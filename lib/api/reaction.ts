import {
  CancelReactionDocument,
  CancelReactionInput,
  CancelReactionMutation,
  CreateReactionDocument,
  CreateReactionInput,
  CreateReactionMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createReaction(input: CreateReactionInput) {
  return client.mutate<CreateReactionMutation>({
    mutation: CreateReactionDocument,
    variables: {
      input,
    },
  });
}

export async function cancelReaction(input: CancelReactionInput) {
  return client.mutate<CancelReactionMutation>({
    mutation: CancelReactionDocument,
    variables: {
      input,
    },
  });
}
