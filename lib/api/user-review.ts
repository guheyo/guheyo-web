import {
  CreateUserReviewDocument,
  CreateUserReviewInput,
  CreateUserReviewMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createUserReview(input: CreateUserReviewInput) {
  return client.mutate<CreateUserReviewMutation>({
    mutation: CreateUserReviewDocument,
    variables: {
      input,
    },
  });
}
