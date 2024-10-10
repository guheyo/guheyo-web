import {
  BumpOfferDocument,
  BumpOfferInput,
  BumpOfferMutation,
  CreateOfferDocument,
  CreateOfferInput,
  CreateOfferMutation,
  DeleteOfferDocument,
  DeleteOfferMutation,
  FindOfferPreviewDocument,
  FindOfferPreviewQuery,
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

export async function deleteOffer(id: string) {
  return client.mutate<DeleteOfferMutation>({
    mutation: DeleteOfferDocument,
    variables: {
      id,
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

export async function findOfferPreview(id: string) {
  return client.query<FindOfferPreviewQuery>({
    query: FindOfferPreviewDocument,
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });
}
