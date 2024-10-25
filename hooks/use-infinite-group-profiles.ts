import {
  FindGroupProfilesOrderByInput,
  FindGroupProfilesWhereInput,
  useFindGroupProfilesQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteGroupProfiles = ({
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  where?: FindGroupProfilesWhereInput;
  orderBy?: FindGroupProfilesOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindGroupProfilesQuery({
    variables: {
      where,
      orderBy,
      keyword,
      target,
      take,
      skip: 0,
    },
  });

  const setRef = useInfiniteScroll(
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          target,
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

  return { setRef, loading, data };
};
