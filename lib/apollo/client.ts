import { HttpLink, split, from } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr';
import { createClient } from 'graphql-ws';
import { cache } from './cache';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  credentials: 'include',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${process.env.NEXT_PUBLIC_WS_URL}/graphql`,
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export function makeClient() {
  return new NextSSRApolloClient({
    link: from([splitLink]),
    cache,
  });
}

export const client = makeClient();
