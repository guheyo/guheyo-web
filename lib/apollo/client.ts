import { HttpLink } from '@apollo/client';
import { NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { cache } from './cache';

export function makeClient() {
  const link = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL}:${process.env.NEXT_PUBLIC_GRAPHQL_PORT}/graphql`,
  });

  return new NextSSRApolloClient({
    cache,
    link,
  });
}

export const client = makeClient();
