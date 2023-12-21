import { makeVar } from '@apollo/client';
import { NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';
import { GuildResponse } from '@/generated/graphql';

export const selectedGuildVar = makeVar<GuildResponse | null>(null);

export interface Category {
  name: string;
  id: string;
}

export const selectedColsVar = makeVar<number>(1);

export const cache = new NextSSRInMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        selectedGuild: {
          read() {
            return selectedGuildVar();
          },
        },
        selectedCols: {
          read() {
            return selectedColsVar();
          },
        },
      },
    },
  },
});
