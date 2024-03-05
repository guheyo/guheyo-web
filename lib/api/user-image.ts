import {
  CreateSignedUrlDocument,
  CreateSignedUrlInput,
  CreateSignedUrlMutation,
  CreateUserImageDocument,
  CreateUserImageInput,
  CreateUserImageMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createSignedUrl(input: CreateSignedUrlInput) {
  return client.mutate<CreateSignedUrlMutation>({
    mutation: CreateSignedUrlDocument,
    variables: {
      input,
    },
  });
}

export async function createUserImage(
  input: CreateUserImageInput,
): Promise<void> {
  await client.mutate<CreateUserImageMutation>({
    mutation: CreateUserImageDocument,
    variables: {
      input,
    },
  });
}
