'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import React from 'react';
import { cache } from './cache';

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL}:${process.env.NEXT_PUBLIC_GRAPHQL_PORT}/graphql`,
  });

  return new NextSSRApolloClient({
    cache,
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export const client = makeClient();

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
