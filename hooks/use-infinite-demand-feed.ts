import { useFindDemandPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindDemandsWhereArgs,
  FindDealsOrderByArgs,
} from '@/interfaces/deal.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteDemandFeed = ({
  ref,
  where,
  orderBy,
  keyword,
  distinct,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindDemandsWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindDemandPreviewsQuery({
    variables: {
      where,
      orderBy,
      keyword,
      distinct,
      take,
      skip: 0,
    },
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          where,
          orderBy,
          keyword,
          distinct,
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
