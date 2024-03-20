import { useFindReportPreviewsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteReports = ({
  ref,
  where,
  orderBy,
  keyword,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindReportPreviewsWhereArgs;
  orderBy?: FindReportPreviewsOrderByArgs;
  keyword?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindReportPreviewsQuery({
    variables: {
      keyword,
      where,
      orderBy,
      take,
      skip: 0,
    },
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          keyword,
          cursor: data?.findReportPreviews.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findReportPreviews: {
              __typename: previousQueryResult.findReportPreviews.__typename,
              edges: [
                ...previousQueryResult.findReportPreviews.edges,
                ...fetchMoreResult.findReportPreviews.edges,
              ],
              pageInfo: fetchMoreResult.findReportPreviews.pageInfo,
            },
          };
        },
      }),
    data?.findReportPreviews.pageInfo.hasNextPage,
  );

  return { loading, data };
};
