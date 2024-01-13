import { ApolloClient, HttpLink } from '@apollo/client';
import { cache } from './cache';

export function makeClient() {
  const link = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL}:${process.env.NEXT_PUBLIC_GRAPHQL_PORT}/graphql`,
  });

  return new ApolloClient({
    cache,
    link,
  });
}

export const client = makeClient();
