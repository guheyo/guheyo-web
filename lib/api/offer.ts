import {
  CreateOfferDocument,
  CreateOfferInput,
  CreateOfferMutation,
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
