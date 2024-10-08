import {
  CommentReportDocument,
  CommentReportInput,
  CommentReportMutation,
  CreateReportDocument,
  CreateReportInput,
  CreateReportMutation,
  FindReportCommentDocument,
  FindReportCommentQuery,
  QueryFindReportCommentArgs,
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

export async function findReportComment(args: QueryFindReportCommentArgs) {
  return client.query<FindReportCommentQuery>({
    query: FindReportCommentDocument,
    variables: {
      ...args,
    },
    fetchPolicy: 'network-only',
  });
}
