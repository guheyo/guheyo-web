import {
  BumpOfferDocument,
  BumpOfferInput,
  BumpOfferMutation,
  CreateOfferDocument,
  CreateOfferInput,
  CreateOfferMutation,
  DeleteOfferDocument,
  DeleteOfferMutation,
  FindOfferCountDocument,
  FindOfferCountQuery,
  QueryFindOfferCountArgs,
  UpdateOfferDocument,
  UpdateOfferInput,
  UpdateOfferMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createOffer(input: CreateOfferInput) {
  return client.mutate<CreateOfferMutation>({
    mutation: CreateOfferDocument,
    variables: {
      input,
    },
  });
}

export async function updateOffer(input: UpdateOfferInput) {
  return client.mutate<UpdateOfferMutation>({
    mutation: UpdateOfferDocument,
    variables: {
      input,
    },
  });
}

export async function deleteOffer(id: string, sellerId: string) {
  return client.mutate<DeleteOfferMutation>({
    mutation: DeleteOfferDocument,
    variables: {
      id,
      sellerId,
    },
  });
}

export async function bumpOffer(input: BumpOfferInput) {
  return client.mutate<BumpOfferMutation>({
    mutation: BumpOfferDocument,
    variables: {
      input,
    },
  });
}

export async function findOfferCount(args: QueryFindOfferCountArgs) {
  return client.query<FindOfferCountQuery>({
    query: FindOfferCountDocument,
    variables: {
      ...args,
    },
  });
}
