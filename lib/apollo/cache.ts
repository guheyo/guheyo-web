import { gql, makeVar } from '@apollo/client';
import { NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';
import { GroupResponse } from '@/generated/graphql';

export const groupVar = makeVar<GroupResponse | null>(null);

export const colsVar = makeVar<number>(1);

export const GET_GUILD = gql`
  query getGroup {
    group @client
  }
`;

export const cache = new NextSSRInMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        group: {
          read() {
            return groupVar();
          },
        },
        cols: {
          read() {
            return colsVar();
          },
        },
      },
    },
  },
});
