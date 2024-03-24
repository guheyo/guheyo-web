import {
  BumpDemandDocument,
  BumpDemandInput,
  BumpDemandMutation,
  CreateDemandDocument,
  CreateDemandInput,
  CreateDemandMutation,
  DeleteDemandDocument,
  DeleteDemandMutation,
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

export async function deleteDemand(id: string, buyerId: string) {
  return client.mutate<DeleteDemandMutation>({
    mutation: DeleteDemandDocument,
    variables: {
      id,
      buyerId,
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
