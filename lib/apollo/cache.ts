import { makeVar } from '@apollo/client';
import { NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';
import { GuildResponse } from '@/generated/graphql';

export type Deal = 'offers' | 'demands' | 'swaps';

export interface Category {
  name: string;
  id: string;
}

export const guildVar = makeVar<GuildResponse | null>(null);

export const dealVar = makeVar<Deal>('offers');

export const colsVar = makeVar<number>(1);

export const cache = new NextSSRInMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        guild: {
          read() {
            return guildVar();
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
