import {
  CancelBidDocument,
  CancelBidInput,
  CancelBidMutation,
  PlaceBidDocument,
  PlaceBidInput,
  PlaceBidMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function placeBid(input: PlaceBidInput) {
  return client.mutate<PlaceBidMutation>({
    mutation: PlaceBidDocument,
    variables: {
      input,
    },
  });
}

export async function cancelBid(input: CancelBidInput) {
  return client.mutate<CancelBidMutation>({
    mutation: CancelBidDocument,
    variables: {
      input,
    },
  });
}
