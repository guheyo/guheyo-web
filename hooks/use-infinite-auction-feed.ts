import { useFindAuctionPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindAuctionsOrderByArgs,
  FindAuctionsWhereArgs,
} from '@/lib/auction/auction.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteAuctionFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindAuctionsWhereArgs;
  orderBy?: FindAuctionsOrderByArgs;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindAuctionPreviewsQuery({
    variables: {
      where,
      orderBy,
      keyword,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          cursor: data?.findAuctionPreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findAuctionPreviews: {
              __typename: previousQueryResult.findAuctionPreviews.__typename,
              edges: [
                ...previousQueryResult.findAuctionPreviews.edges,
                ...fetchMoreResult.findAuctionPreviews.edges,
              ],
              pageInfo: fetchMoreResult.findAuctionPreviews.pageInfo,
            },
          };
        },
      }),
    data?.findAuctionPreviews.pageInfo.hasNextPage,
  );

  return { loading, data };
};
