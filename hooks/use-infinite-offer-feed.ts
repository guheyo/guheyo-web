import { useFindOfferPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindOffersWhereArgs,
  FindOffersOrderByArgs,
} from '@/interfaces/deal.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteOfferFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindOffersWhereArgs;
  orderBy?: FindOffersOrderByArgs;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindOfferPreviewsQuery({
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
