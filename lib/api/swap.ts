import {
  BumpSwapDocument,
  BumpSwapInput,
  BumpSwapMutation,
  CommentSwapReportDocument,
  CommentSwapReportInput,
  CommentSwapReportMutation,
  CreateSwapDocument,
  CreateSwapInput,
  CreateSwapMutation,
  UpdateSwapDocument,
  UpdateSwapInput,
  UpdateSwapMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createSwap(input: CreateSwapInput) {
  return client.mutate<CreateSwapMutation>({
    mutation: CreateSwapDocument,
    variables: {
      input,
    },
  });
}

export async function updateSwap(input: UpdateSwapInput) {
  return client.mutate<UpdateSwapMutation>({
    mutation: UpdateSwapDocument,
    variables: {
      input,
    },
  });
}

export async function bumpSwap(input: BumpSwapInput) {
  return client.mutate<BumpSwapMutation>({
    mutation: BumpSwapDocument,
    variables: {
      input,
    },
  });
}

export async function commentSwapReport(input: CommentSwapReportInput) {
  return client.mutate<CommentSwapReportMutation>({
    mutation: CommentSwapReportDocument,
    variables: {
      input,
    },
  });
}
