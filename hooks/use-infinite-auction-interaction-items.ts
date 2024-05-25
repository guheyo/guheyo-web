import { useFindAuctionInteractionItemsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindAuctionInteractionItemsOrderByArgs,
  FindAuctionInteractionItemsWhereArgs,
} from '@/lib/auction/auction.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteAuctionInteractionItems = ({
  ref,
  where,
  orderBy,
  keyword,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindAuctionInteractionItemsWhereArgs;
  orderBy?: FindAuctionInteractionItemsOrderByArgs;
  keyword?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindAuctionInteractionItemsQuery({
    variables: {
      where,
      orderBy,
      keyword,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-and-network',
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          cursor: data?.findAuctionInteractionItems.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findAuctionInteractionItems: {
              __typename:
                previousQueryResult.findAuctionInteractionItems.__typename,
              edges: [
                ...previousQueryResult.findAuctionInteractionItems.edges,
                ...fetchMoreResult.findAuctionInteractionItems.edges,
              ],
              pageInfo: fetchMoreResult.findAuctionInteractionItems.pageInfo,
            },
          };
        },
      }),
    data?.findAuctionInteractionItems.pageInfo.hasNextPage,
  );

  return { loading, data };
};
