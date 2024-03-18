import {
  CreateCommentDocument,
  CreateCommentInput,
  CreateCommentMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createComment(input: CreateCommentInput) {
  return client.mutate<CreateCommentMutation>({
    mutation: CreateCommentDocument,
    variables: {
      input,
    },
  });
}
