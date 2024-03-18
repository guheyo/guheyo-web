import {
  BumpDemandDocument,
  BumpDemandInput,
  BumpDemandMutation,
  CommentDemandReportDocument,
  CommentDemandReportInput,
  CommentDemandReportMutation,
  CreateDemandDocument,
  CreateDemandInput,
  CreateDemandMutation,
  UpdateDemandDocument,
  UpdateDemandInput,
  UpdateDemandMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createDemand(input: CreateDemandInput) {
  return client.mutate<CreateDemandMutation>({
    mutation: CreateDemandDocument,
    variables: {
      input,
    },
  });
}

export async function updateDemand(input: UpdateDemandInput) {
  return client.mutate<UpdateDemandMutation>({
    mutation: UpdateDemandDocument,
    variables: {
      input,
    },
  });
}

export async function bumpDemand(input: BumpDemandInput) {
  return client.mutate<BumpDemandMutation>({
    mutation: BumpDemandDocument,
    variables: {
      input,
    },
  });
}

export async function commentDemandReport(input: CommentDemandReportInput) {
  return client.mutate<CommentDemandReportMutation>({
    mutation: CommentDemandReportDocument,
    variables: {
      input,
    },
  });
}
