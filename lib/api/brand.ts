import {
  CreateBrandDocument,
  CreateBrandInput,
  CreateBrandMutation,
  FollowBrandDocument,
  FollowBrandInput,
  FollowBrandMutation,
  UnfollowBrandDocument,
  UnfollowBrandInput,
  UnfollowBrandMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createBrand(input: CreateBrandInput) {
  return client.mutate<CreateBrandMutation>({
    mutation: CreateBrandDocument,
    variables: {
      input,
    },
  });
}

export async function followBrand(input: FollowBrandInput) {
  return client.mutate<FollowBrandMutation>({
    mutation: FollowBrandDocument,
    variables: {
      input,
    },
  });
}

export async function unfollowBrand(input: UnfollowBrandInput) {
  return client.mutate<UnfollowBrandMutation>({
    mutation: UnfollowBrandDocument,
    variables: {
      input,
    },
  });
}
