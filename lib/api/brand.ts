import {
  CreateBrandDocument,
  CreateBrandInput,
  CreateBrandMutation,
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
