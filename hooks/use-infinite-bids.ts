import {
  FindBidsOrderByInput,
  FindBidsWhereInput,
  useFindBidsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteBids = ({
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  where?: FindBidsWhereInput;
  orderBy?: FindBidsOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindBidsQuery({
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
          cursor: data?.findBids.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findBids: {
              __typename: previousQueryResult.findBids.__typename,
              edges: [
                ...previousQueryResult.findBids.edges,
                ...fetchMoreResult.findBids.edges,
              ],
              pageInfo: fetchMoreResult.findBids.pageInfo,
            },
          };
        },
      }),
    data?.findBids.pageInfo.hasNextPage,
  );

  return { setRef, loading, data };
};
