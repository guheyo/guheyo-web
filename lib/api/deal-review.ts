import {
  CreateDealReviewDocument,
  CreateDealReviewInput,
  CreateDealReviewMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createDealReview(input: CreateDealReviewInput) {
  return client.mutate<CreateDealReviewMutation>({
    mutation: CreateDealReviewDocument,
    variables: {
      input,
    },
  });
}
