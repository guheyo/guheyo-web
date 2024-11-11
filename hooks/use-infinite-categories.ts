import {
  FindCategoriesOrderByInput,
  FindCategoriesWhereInput,
  useFindCategoriesQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteCategories = ({
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  where?: FindCategoriesWhereInput;
  orderBy?: FindCategoriesOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindCategoriesQuery({
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
          cursor: data?.findCategories.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findCategories: {
              __typename: previousQueryResult.findCategories.__typename,
              edges: [
                ...previousQueryResult.findCategories.edges,
                ...fetchMoreResult.findCategories.edges,
              ],
              pageInfo: fetchMoreResult.findCategories.pageInfo,
            },
          };
        },
      }),
    data?.findCategories.pageInfo.hasNextPage,
  );

  return { setRef, loading, data };
};
