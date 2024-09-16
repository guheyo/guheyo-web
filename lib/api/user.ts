import { client } from '@/lib/apollo/client';
import {
  FollowUserDocument,
  FollowUserInput,
  FollowUserMutation,
  LinkSocialProfileDocument,
  LinkSocialProfileInput,
  UpdateUserDocument,
  UpdateUserInput,
} from '@/generated/graphql';

export async function updateUser(input: UpdateUserInput) {
  await client.mutate({
    mutation: UpdateUserDocument,
    variables: {
      input,
    },
  });
}

export async function linkSocialProfile(input: LinkSocialProfileInput) {
  await client.mutate({
    mutation: LinkSocialProfileDocument,
    variables: {
      input,
    },
  });
}

export async function followUser(input: FollowUserInput) {
  return client.mutate<FollowUserMutation>({
    mutation: FollowUserDocument,
    variables: {
      input,
    },
  });
}
