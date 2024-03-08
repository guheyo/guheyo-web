import {
  CreateSwapDocument,
  CreateSwapInput,
  CreateSwapMutation,
  UpdateSwapDocument,
  UpdateSwapInput,
  UpdateSwapMutation,
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

export async function updateSwap(input: UpdateSwapInput) {
  return client.mutate<UpdateSwapMutation>({
    mutation: UpdateSwapDocument,
    variables: {
      input,
    },
  });
}
