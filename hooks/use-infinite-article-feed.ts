import {
  FindArticlePreviewsOrderByInput,
  FindArticlePreviewsWhereInput,
  useFindArticlePreviewsQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteArticleFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindArticlePreviewsWhereInput;
  orderBy?: FindArticlePreviewsOrderByInput;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindArticlePreviewsQuery({
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
          cursor: data?.findArticlePreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findArticlePreviews: {
              __typename: previousQueryResult.findArticlePreviews.__typename,
              edges: [
                ...previousQueryResult.findArticlePreviews.edges,
                ...fetchMoreResult.findArticlePreviews.edges,
              ],
              pageInfo: fetchMoreResult.findArticlePreviews.pageInfo,
            },
          };
        },
      }),
    data?.findArticlePreviews.pageInfo.hasNextPage,
  );

  return { loading, data };
};
