import {
  CreateUserReviewDocument,
  CreateUserReviewInput,
  CreateUserReviewMutation,
  DeleteUserReviewDocument,
  DeleteUserReviewMutation,
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

export async function deleteUserReview(id: string) {
  return client.mutate<DeleteUserReviewMutation>({
    mutation: DeleteUserReviewDocument,
    variables: {
      id,
    },
  });
}
