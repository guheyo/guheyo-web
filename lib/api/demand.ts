import {
  CreateDemandDocument,
  CreateDemandInput,
  CreateDemandMutation,
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
