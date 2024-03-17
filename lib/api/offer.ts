import {
  BumpOfferDocument,
  BumpOfferInput,
  BumpOfferMutation,
  CommentOfferReportDocument,
  CommentOfferReportInput,
  CommentOfferReportMutation,
  CreateOfferDocument,
  CreateOfferInput,
  CreateOfferMutation,
  UpdateOfferDocument,
  UpdateOfferInput,
  UpdateOfferMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createOffer(input: CreateOfferInput) {
  return client.mutate<CreateOfferMutation>({
    mutation: CreateOfferDocument,
    variables: {
      input,
    },
  });
}

export async function updateOffer(input: UpdateOfferInput) {
  return client.mutate<UpdateOfferMutation>({
    mutation: UpdateOfferDocument,
    variables: {
      input,
    },
  });
}

export async function bumpOffer(input: BumpOfferInput) {
  return client.mutate<BumpOfferMutation>({
    mutation: BumpOfferDocument,
    variables: {
      input,
    },
  });
}

export async function commentOfferReport(input: CommentOfferReportInput) {
  return client.mutate<CommentOfferReportMutation>({
    mutation: CommentOfferReportDocument,
    variables: {
      input,
    },
  });
}
