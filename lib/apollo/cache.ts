import { gql, makeVar } from '@apollo/client';
import { NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';
import { GroupResponse } from '@/generated/graphql';

export type Deal = 'offer' | 'demand' | 'swap';

export const groupVar = makeVar<GroupResponse | null>(null);

export const dealVar = makeVar<Deal>('offer');

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
        deal: {
          read() {
            return dealVar();
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
