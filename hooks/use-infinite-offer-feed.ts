import { useFindOffersQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteOfferFeed = ({
  ref,
  categoryId,
  sellerId,
  status,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  categoryId?: string;
  sellerId?: string;
  status?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindOffersQuery({
    variables: {
      productCategoryId: categoryId,
      sellerId,
      status,
      take,
      skip: 0,
    },
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          productCategoryId: categoryId,
          sellerId,
          status,
          cursor: data?.findOffers.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findOffers: {
              __typename: previousQueryResult.findOffers.__typename,
              edges: [
                ...previousQueryResult.findOffers.edges,
                ...fetchMoreResult.findOffers.edges,
              ],
              pageInfo: fetchMoreResult.findOffers.pageInfo,
            },
          };
        },
      }),
    data?.findOffers.pageInfo.hasNextPage,
  );

  return { loading, data };
};