import {
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
