import {
  CreateAuctionDocument,
  CreateAuctionInput,
  CreateAuctionMutation,
  FindAuctionPreviewDocument,
  FindAuctionPreviewQuery,
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

export async function findAuctionPreview(id: string) {
  return client.query<FindAuctionPreviewQuery>({
    query: FindAuctionPreviewDocument,
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });
}
