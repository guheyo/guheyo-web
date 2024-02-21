import { useFindDemandPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteDemandFeed = ({
  ref,
  categoryId,
  buyerId,
  status,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  categoryId?: string;
  buyerId?: string;
  status?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindDemandPreviewsQuery({
    variables: {
      productCategoryId: categoryId,
      buyerId,
      status,
      take,
      skip: 0,
    },
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          productCategoryId: categoryId,
          buyerId,
          status,
          cursor: data?.findDemandPreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findDemandPreviews: {
              __typename: previousQueryResult.findDemandPreviews.__typename,
              edges: [
                ...previousQueryResult.findDemandPreviews.edges,
                ...fetchMoreResult.findDemandPreviews.edges,
              ],
              pageInfo: fetchMoreResult.findDemandPreviews.pageInfo,
            },
          };
        },
      }),
    data?.findDemandPreviews.pageInfo.hasNextPage,
  );

  return { loading, data };
};
