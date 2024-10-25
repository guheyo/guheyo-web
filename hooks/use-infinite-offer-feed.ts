import {
  FindOfferPreviewsOrderByInput,
  FindOfferPreviewsWhereInput,
  useFindOfferPreviewsQuery,
} from '@/generated/graphql';
import { useInfiniteScroll } from './use-infinite-scroll';

export const useInfiniteOfferFeed = ({
  where,
  orderBy,
  keyword,
  target,
  distinct,
  take,
}: {
  where?: FindOfferPreviewsWhereInput;
  orderBy?: FindOfferPreviewsOrderByInput;
  keyword?: string;
  target?: string;
  distinct?: boolean;
  take: number;
}) => {
  const { loading, data, fetchMore } = useFindOfferPreviewsQuery({
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
          where,
          orderBy,
          keyword,
          target,
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

  return { setRef, loading, data };
};
