import {
  FindBrandsOrderByInput,
  FindBrandsWhereInput,
  useFindBrandsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteBrands = ({
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  where?: FindBrandsWhereInput;
  orderBy?: FindBrandsOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindBrandsQuery({
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

  const setRef = useInfiniteScroll(
    () =>
      fetchMore({
        variables: {
          keyword,
          target,
          cursor: data?.findBrands.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findBrands: {
              __typename: previousQueryResult.findBrands.__typename,
              edges: [
                ...previousQueryResult.findBrands.edges,
                ...fetchMoreResult.findBrands.edges,
              ],
              pageInfo: fetchMoreResult.findBrands.pageInfo,
            },
          };
        },
      }),
    data?.findBrands.pageInfo.hasNextPage,
  );

  return { setRef, loading, data };
};
