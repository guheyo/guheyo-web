import {
  BumpDemandDocument,
  BumpDemandInput,
  BumpDemandMutation,
  CreateDemandDocument,
  CreateDemandInput,
  CreateDemandMutation,
  UpdateDemandDocument,
  UpdateDemandInput,
  UpdateDemandMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createDemand(input: CreateDemandInput) {
  return client.mutate<CreateDemandMutation>({
    mutation: CreateDemandDocument,
    variables: {
      input,
    },
  });
}

export async function updateDemand(input: UpdateDemandInput) {
  return client.mutate<UpdateDemandMutation>({
    mutation: UpdateDemandDocument,
    variables: {
      input,
    },
  });
}

export async function bumpDemand(input: BumpDemandInput) {
  return client.mutate<BumpDemandMutation>({
    mutation: BumpDemandDocument,
    variables: {
      input,
    },
  });
}
