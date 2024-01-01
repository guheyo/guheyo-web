import {
  CreateSocialAccountDocument,
  CreateSocialAccountInput,
  DeleteSocialAccountByProviderDocument,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function linkAccount(input: CreateSocialAccountInput) {
  await client.mutate({
    mutation: CreateSocialAccountDocument,
    variables: {
      input,
    },
  });
}

export async function unlinkAccount({
  provider,
  socialId,
}: {
  provider: string;
  socialId: string;
}) {
  await client.mutate({
    mutation: DeleteSocialAccountByProviderDocument,
    variables: {
      provider,
      socialId,
    },
  });
}
