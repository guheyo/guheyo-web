import {
  CreateProductDocument,
  CreateProductInput,
  CreateProductMutation,
  FindProductDocument,
  FindProductPreviewDocument,
  FindProductPreviewQuery,
  FindProductQuery,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function createProduct(input: CreateProductInput) {
  return client.mutate<CreateProductMutation>({
    mutation: CreateProductDocument,
    variables: {
      input,
    },
  });
}

export async function findProduct(id: string) {
  return client.query<FindProductQuery>({
    query: FindProductDocument,
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });
}

export async function findProductPreview(id: string) {
  return client.query<FindProductPreviewQuery>({
    query: FindProductPreviewDocument,
    variables: {
      id,
    },
    fetchPolicy: 'network-only',
  });
}
