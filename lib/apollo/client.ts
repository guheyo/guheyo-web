import { HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { getSession } from 'next-auth/react';
import { cache } from './cache';

export const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL}:${process.env.NEXT_PUBLIC_GRAPHQL_PORT}/graphql`,
});

export const getBearerToken = async () => {
  const session = await getSession();
  return session?.user?.accessToken ? `Bearer ${session.user.accessToken}` : '';
};

export const authLink = setContext(async (_, { headers }) => {
  const modifiedHeader = {
    headers: {
      ...headers,
      authorization: await getBearerToken(),
    },
  };
  return modifiedHeader;
});

export function makeClient() {
  return new NextSSRApolloClient({
    link: from([authLink, httpLink]),
    cache,
  });
}

export const client = makeClient();
