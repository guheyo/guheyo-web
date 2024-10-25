import {
  FindAuctionPreviewsOrderByInput,
  FindAuctionPreviewsWhereInput,
  useFindAuctionPreviewsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteAuctionFeed = ({
  where,
  orderBy,
  keyword,
  target,
  distinct,
  take,
}: {
  where?: FindAuctionPreviewsWhereInput;
  orderBy?: FindAuctionPreviewsOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindAuctionPreviewsQuery({
    variables: {
      where,
      orderBy,
      keyword,
      target,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  const setRef = useInfiniteScroll(
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          target,
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

  return { setRef, loading, data };
};
