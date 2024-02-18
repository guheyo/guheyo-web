import { HttpLink, from } from '@apollo/client';
import { NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { cache } from './cache';

export const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  credentials: 'include',
});

export function makeClient() {
  return new NextSSRApolloClient({
    link: from([httpLink]),
    cache,
  });
}

export const client = makeClient();
