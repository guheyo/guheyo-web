import { useFindReportsQuery } from '@/generated/graphql';
import { RefObject } from 'react';
import {
  FindReportsOrderByArgs,
  FindReportsWhereArgs,
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
  where?: FindReportsWhereArgs;
  orderBy?: FindReportsOrderByArgs;
  keyword?: string;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindReportsQuery({
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
          cursor: data?.findReports.pageInfo.endCursor,
          take,
          skip: 1,
        },
        updateQuery: (previousQueryResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousQueryResult;
          return {
            findReports: {
              __typename: previousQueryResult.findReports.__typename,
              edges: [
                ...previousQueryResult.findReports.edges,
                ...fetchMoreResult.findReports.edges,
              ],
              pageInfo: fetchMoreResult.findReports.pageInfo,
            },
          };
        },
      }),
    data?.findReports.pageInfo.hasNextPage,
  );

  return { loading, data };
};
