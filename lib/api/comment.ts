import {
  CreateCommentDocument,
  CreateCommentInput,
  CreateCommentMutation,
  DeleteCommentDocument,
  DeleteCommentInput,
  DeleteCommentMutation,
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

export async function deleteComment(input: DeleteCommentInput) {
  return client.mutate<DeleteCommentMutation>({
    mutation: DeleteCommentDocument,
    variables: {
      input,
    },
  });
}
