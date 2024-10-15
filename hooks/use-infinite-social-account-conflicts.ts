import {
  FindSocialAccountConflictsOrderByInput,
  FindSocialAccountConflictsWhereInput,
  useFindSocialAccountConflictsQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteSocialAccountConflicts = ({
  ref,
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindSocialAccountConflictsWhereInput;
  orderBy?: FindSocialAccountConflictsOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindSocialAccountConflictsQuery({
    variables: {
      keyword,
      target,
      where,
      orderBy,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-and-network',
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          keyword,
          target,
          cursor: data?.findSocialAccountConflicts.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findSocialAccountConflicts: {
              __typename:
                previousQueryResult.findSocialAccountConflicts.__typename,
              edges: [
                ...previousQueryResult.findSocialAccountConflicts.edges,
                ...fetchMoreResult.findSocialAccountConflicts.edges,
              ],
              pageInfo: fetchMoreResult.findSocialAccountConflicts.pageInfo,
            },
          };
        },
      }),
    data?.findSocialAccountConflicts.pageInfo.hasNextPage,
  );

  return { loading, data };
};
