import {
  CreateCommentDocument,
  CreateCommentInput,
  CreateCommentMutation,
  UpdateCommentDocument,
  UpdateCommentInput,
  UpdateCommentMutation,
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

export async function updateComment(input: UpdateCommentInput) {
  return client.mutate<UpdateCommentMutation>({
    mutation: UpdateCommentDocument,
    variables: {
      input,
    },
  });
}
