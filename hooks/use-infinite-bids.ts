import {
  FindBidsOrderByInput,
  FindBidsWhereInput,
  useFindBidsQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteBids = ({
  ref,
  where,
  orderBy,
  keyword,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindBidsWhereInput;
  orderBy?: FindBidsOrderByInput;
  keyword?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindBidsQuery({
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

  return { loading, data };
};
