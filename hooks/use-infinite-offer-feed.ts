import { useFindOfferPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteOfferFeed = ({
  ref,
  groupId,
  categoryId,
  sellerId,
  status,
  keyword,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  groupId?: string;
  categoryId?: string;
  sellerId?: string;
  status?: string;
  keyword?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindOfferPreviewsQuery({
    variables: {
      groupId,
      productCategoryId: categoryId,
      sellerId,
      status,
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
          groupId,
          productCategoryId: categoryId,
          sellerId,
          status,
          keyword,
          cursor: data?.findOfferPreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findOfferPreviews: {
              __typename: previousQueryResult.findOfferPreviews.__typename,
              edges: [
                ...previousQueryResult.findOfferPreviews.edges,
                ...fetchMoreResult.findOfferPreviews.edges,
              ],
              pageInfo: fetchMoreResult.findOfferPreviews.pageInfo,
            },
          };
        },
      }),
    data?.findOfferPreviews.pageInfo.hasNextPage,
  );

  return { loading, data };
};
