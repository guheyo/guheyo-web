import { client } from '@/lib/apollo/client';
import {
  DeleteUserDocument,
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

export async function deleteUser(id: string) {
  await client.mutate({
    mutation: DeleteUserDocument,
    variables: {
      id,
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
