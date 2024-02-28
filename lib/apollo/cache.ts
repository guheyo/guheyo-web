import { gql, makeVar } from '@apollo/client';
import { NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';
import { GroupResponse } from '@/generated/graphql';

export type Deal = 'offers' | 'demands' | 'swaps';

export interface Category {
  name: string;
  id: string;
}

export const groupVar = makeVar<GroupResponse | null>(null);

export const dealVar = makeVar<Deal>('offers');

export const colsVar = makeVar<number>(1);

export const GET_GUILD = gql`
  query getGroup {
    group @client
  }
`;

export const GET_PRODUCT_CATEGORY = gql`
  query GetProductCategory($slug: String!) {
    productCategory @client
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
        productCategory: {
          read(existing, { variables }) {
            return groupVar()?.productCategories.find(
              (category) => category.slug === variables?.slug,
            );
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
