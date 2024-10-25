import {
  FindBiddersOrderByInput,
  FindBiddersWhereInput,
  useFindBiddersQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteBidders = ({
  where,
  orderBy,
  keyword,
  target,
  take,
  skip,
}: {
  where: FindBiddersWhereInput;
  orderBy?: FindBiddersOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
  skip: boolean;
}) => {
  const { loading, data, fetchMore } = useFindBiddersQuery({
    variables: {
      where,
      orderBy,
      keyword,
      target,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
    skip,
  });

  const setRef = useInfiniteScroll(
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          target,
          cursor: data?.findBidders.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findBidders: {
              __typename: previousQueryResult.findBidders.__typename,
              edges: [
                ...previousQueryResult.findBidders.edges,
                ...fetchMoreResult.findBidders.edges,
              ],
              pageInfo: fetchMoreResult.findBidders.pageInfo,
            },
          };
        },
      }),
    data?.findBidders.pageInfo.hasNextPage,
  );

  return { setRef, loading, data };
};
