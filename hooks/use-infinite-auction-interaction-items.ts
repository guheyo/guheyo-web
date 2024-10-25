import {
  FindAuctionInteractionItemsOrderByInput,
  FindAuctionInteractionItemsWhereInput,
  useFindAuctionInteractionItemsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteAuctionInteractionItems = ({
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  where?: FindAuctionInteractionItemsWhereInput;
  orderBy?: FindAuctionInteractionItemsOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindAuctionInteractionItemsQuery({
    variables: {
      where,
      orderBy,
      keyword,
      target,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-and-network',
  });

  const setRef = useInfiniteScroll(
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          target,
          cursor: data?.findAuctionInteractionItems.pageInfo.endCursor,
          take,
          skip: 0, // NOTE: do not skip, since createdAt is cursor not id
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

  return { setRef, loading, data };
};
