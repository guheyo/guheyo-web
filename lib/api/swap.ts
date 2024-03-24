import {
  BumpSwapDocument,
  BumpSwapInput,
  BumpSwapMutation,
  CreateSwapDocument,
  CreateSwapInput,
  CreateSwapMutation,
  DeleteSwapDocument,
  DeleteSwapMutation,
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

export async function deleteSwap(id: string, proposerId: string) {
  return client.mutate<DeleteSwapMutation>({
    mutation: DeleteSwapDocument,
    variables: {
      id,
      proposerId,
    },
  });
}

export async function bumpSwap(input: BumpSwapInput) {
  return client.mutate<BumpSwapMutation>({
    mutation: BumpSwapDocument,
    variables: {
      input,
    },
  });
}
