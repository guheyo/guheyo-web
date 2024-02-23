import { useFindGroupProfilesQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteGroupProfiles = ({
  ref,
  keyword,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  keyword?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindGroupProfilesQuery({
    variables: {
      keyword,
      take,
      skip: 0,
    },
  });
  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          keyword,
          cursor: data?.findGroupProfiles.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findGroupProfiles: {
              __typename: previousQueryResult.findGroupProfiles.__typename,
              edges: [
                ...previousQueryResult.findGroupProfiles.edges,
                ...fetchMoreResult.findGroupProfiles.edges,
              ],
              pageInfo: fetchMoreResult.findGroupProfiles.pageInfo,
            },
          };
        },
      }),
    data?.findGroupProfiles.pageInfo.hasNextPage,
  );

  return { loading, data };
};
