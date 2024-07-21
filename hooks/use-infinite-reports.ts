import {
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
  useFindReportPreviewsQuery,
} from '@/generated/graphql';
import { RefObject } from 'react';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteReports = ({
  ref,
  where,
  orderBy,
  keyword,
  target,
  take,
}: {
  ref: RefObject<HTMLDivElement>;
  where?: FindReportPreviewsWhereInput;
  orderBy?: FindReportPreviewsOrderByInput;
  keyword?: string;
  target?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindReportPreviewsQuery({
    variables: {
      keyword,
      target,
      where,
      orderBy,
      take,
      skip: 0,
    },
    fetchPolicy: 'cache-and-network',
  });

  useInfiniteScroll(
    ref,
    () =>
      fetchMore({
        variables: {
          keyword,
          target,
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
