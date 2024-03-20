import {
  CreateCommentDocument,
  CreateCommentInput,
  CreateCommentMutation,
  FindCommentDocument,
  FindCommentQuery,
  FindCommentQueryVariables,
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
    update: (cache, { data }) => {
      if (!data?.updateComment) return;

      const comment = data.updateComment;
      let refId;
      if (comment.type === 'post') {
        refId = comment.postId;
      } else if (comment.type === 'report') {
        refId = comment.reportId;
      } else if (comment.type === 'auction') {
        refId = comment.auctionId;
      } else {
        return;
      }

      cache.writeQuery({
        query: FindCommentDocument,
        variables: {
          type: data.updateComment.type,
          refId,
        },
        data: data?.updateComment,
      });
    },
  });
}
