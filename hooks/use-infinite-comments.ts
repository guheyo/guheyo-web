import {
  FindCommentsOrderByInput,
  FindCommentsWhereInput,
  useFindCommentsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteComments = ({
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  where?: FindCommentsWhereInput;
  orderBy?: FindCommentsOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindCommentsQuery({
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
          cursor: data?.findComments.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findComments: {
              __typename: previousQueryResult.findComments.__typename,
              edges: [
                ...previousQueryResult.findComments.edges,
                ...fetchMoreResult.findComments.edges,
              ],
              pageInfo: fetchMoreResult.findComments.pageInfo,
            },
          };
        },
      }),
    data?.findComments.pageInfo.hasNextPage,
  );

  return { setRef, loading, data };
};
