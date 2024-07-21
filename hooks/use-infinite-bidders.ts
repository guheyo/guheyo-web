import {
  FindBiddersOrderByInput,
  FindBiddersWhereInput,
  useFindBiddersQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteBidders = ({
  ref,
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where: FindBiddersWhereInput;
  orderBy?: FindBiddersOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
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
  });

  useInfiniteScroll(
    ref,
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

  return { loading, data };
};
