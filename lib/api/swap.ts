import {
  CreateSwapDocument,
  CreateSwapInput,
  CreateSwapMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createSwap(input: CreateSwapInput) {
  return client.mutate<CreateSwapMutation>({
    mutation: CreateSwapDocument,
    variables: {
      input,
    },
  });
}
