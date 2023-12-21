'use client';

import { useSearchParams } from 'next/navigation';
import { useReactiveVar } from '@apollo/client';
import { useFindOffersQuery } from '@/generated/graphql';
import OfferPreview from '@/components/offers/offer-preview';
import { selectedColsVar } from '@/lib/apollo/cache';
import CategoriesNavbar from '@/components/categories/categories-navbar';

export interface OffersPageProps {
  params: {
    guildName: string;
    categoryId: string;
  };
}

function OffersPage({ params: { guildName } }: OffersPageProps) {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const selectedCols = useReactiveVar(selectedColsVar);

  const { loading, error, data, fetchMore } = useFindOffersQuery({
    variables: {
      productCategoryId: categoryId!,
      take: 12,
      skip: 1,
    },
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findOffers) return <div>null</div>;

  const { edges, pageInfo } = data.findOffers;

  const onFetchMore = () => {
    fetchMore({
      variables: {
        productCategoryId: categoryId,
        cursor: pageInfo.endCursor,
        take: 12,
        skip: 1,
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousQueryResult;
        return {
          findOffers: {
            __typename: previousQueryResult.findOffers.__typename,
            edges: [
              ...previousQueryResult.findOffers.edges,
              ...fetchMoreResult.findOffers.edges,
            ],
            pageInfo: fetchMoreResult.findOffers.pageInfo,
          },
        };
      },
    });
  };

  return (
    <div className="grid gap-8">
      <div>
        <CategoriesNavbar type="offers" />
      </div>
      <div
        className={`grid gap-4 md:gap-8 lg:gap-12 ${
          selectedCols === 1 ? 'grid-cols-1' : 'grid-cols-2'
        } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start`}
      >
        {edges.map((edge) => (
          <div className="col-span-1 p-1" key={edge.node.id}>
            <OfferPreview offer={edge.node} cols={3} />
          </div>
        ))}
      </div>
      <button type="button" onClick={() => onFetchMore()}>
        더보기
      </button>
    </div>
  );
}

export default OffersPage;
