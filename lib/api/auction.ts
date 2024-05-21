import {
  CreateAuctionDocument,
  CreateAuctionInput,
  CreateAuctionMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createAuction(input: CreateAuctionInput) {
  return client.mutate<CreateAuctionMutation>({
    mutation: CreateAuctionDocument,
    variables: {
      input,
    },
  });
}
