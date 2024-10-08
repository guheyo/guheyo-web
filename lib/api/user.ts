import { client } from '@/lib/apollo/client';
import {
  FindAuthorDocument,
  FindAuthorQuery,
  FindUserDocument,
  FindUserQuery,
  FollowUserDocument,
  FollowUserInput,
  FollowUserMutation,
  LinkSocialProfileDocument,
  LinkSocialProfileInput,
  QueryFindAuctionArgs,
  QueryFindUserArgs,
  UnfollowUserDocument,
  UnfollowUserInput,
  UnfollowUserMutation,
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

export async function unfollowUser(input: UnfollowUserInput) {
  return client.mutate<UnfollowUserMutation>({
    mutation: UnfollowUserDocument,
    variables: {
      input,
    },
  });
}

export async function findUser(args: QueryFindUserArgs) {
  return client.query<FindUserQuery>({
    query: FindUserDocument,
    variables: {
      ...args,
    },
    fetchPolicy: 'network-only',
  });
}

export async function findAuthor(args: QueryFindAuctionArgs) {
  return client.query<FindAuthorQuery>({
    query: FindAuthorDocument,
    variables: {
      ...args,
    },
    fetchPolicy: 'network-only',
  });
}
