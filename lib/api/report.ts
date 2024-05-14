import {
  CommentReportDocument,
  CommentReportInput,
  CommentReportMutation,
  CreateReportDocument,
  CreateReportInput,
  CreateReportMutation,
  UpdateReportCommentDocument,
  UpdateReportCommentInput,
  UpdateReportCommentMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createReport(input: CreateReportInput) {
  return client.mutate<CreateReportMutation>({
    mutation: CreateReportDocument,
    variables: {
      input,
    },
  });
}

export async function commentReport(input: CommentReportInput) {
  return client.mutate<CommentReportMutation>({
    mutation: CommentReportDocument,
    variables: {
      input,
    },
  });
}

export async function updateReportComment(input: UpdateReportCommentInput) {
  return client.mutate<UpdateReportCommentMutation>({
    mutation: UpdateReportCommentDocument,
    variables: {
      input,
    },
  });
}
