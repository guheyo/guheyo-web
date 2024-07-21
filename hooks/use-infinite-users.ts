import {
  FindUsersOrderByInput,
  FindUsersWhereInput,
  useFindUsersQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteUsers = ({
  ref,
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindUsersWhereInput;
  orderBy?: FindUsersOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindUsersQuery({
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
          cursor: data?.findUsers.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findUsers: {
              __typename: previousQueryResult.findUsers.__typename,
              edges: [
                ...previousQueryResult.findUsers.edges,
                ...fetchMoreResult.findUsers.edges,
              ],
              pageInfo: fetchMoreResult.findUsers.pageInfo,
            },
          };
        },
      }),
    data?.findUsers.pageInfo.hasNextPage,
  );

  return { loading, data };
};
