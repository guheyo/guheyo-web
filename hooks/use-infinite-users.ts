import { useFindUsersQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindUsersOrderByArgs,
  FindUsersWhereArgs,
} from '@/interfaces/user.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteUsers = ({
  ref,
  where,
  orderBy,
  keyword,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindUsersWhereArgs;
  orderBy?: FindUsersOrderByArgs;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindUsersQuery({
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
