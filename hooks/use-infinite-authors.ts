import {
  FindAuthorsOrderByInput,
  FindAuthorsWhereInput,
  useFindAuthorsQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteAuthors = ({
  where,
  orderBy,
  keyword,
  target,
  take,
  skip,
}: {
  where?: FindAuthorsWhereInput;
  orderBy?: FindAuthorsOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
  skip: boolean;
}) => {
  const { loading, data, fetchMore } = useFindAuthorsQuery({
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
          cursor: data?.findAuthors.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findAuthors: {
              __typename: previousQueryResult.findAuthors.__typename,
              edges: [
                ...previousQueryResult.findAuthors.edges,
                ...fetchMoreResult.findAuthors.edges,
              ],
              pageInfo: fetchMoreResult.findAuthors.pageInfo,
            },
          };
        },
      }),
    data?.findAuthors.pageInfo.hasNextPage,
  );

  return { setRef, loading, data };
};
