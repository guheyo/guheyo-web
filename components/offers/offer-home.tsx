'use client';

import { useFindOfferPreviewsQuery } from '@/generated/graphql';
import { BusinessFunction } from '@/lib/offer/offer.types';
import OfferHomeFeedLayout from './offer-home-feed.layout';
import OfferPreview from './offer-preview';

export default function OfferHome({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  const { loading, data } = useFindOfferPreviewsQuery({
    variables: {
      where: {
        businessFunction,
      },
      orderBy: {
        bumpedAt: 'desc',
      },
      take: 2,
      skip: 0,
    },
    fetchPolicy: 'cache-first',
  });

  if (loading) return <div />;
  if (!data?.findOfferPreviews) return <div />;

  const offers = data.findOfferPreviews.edges.map((edge) => edge.node);

  return (
    <OfferHomeFeedLayout
      businessFunction={businessFunction}
      hideGroupProfileSidebarItems
      showCategories={false}
      showSelectors={false}
      showMoreLink
    >
      {offers.map((offer) => (
        <OfferPreview
          type={businessFunction === 'buy' ? 'text' : 'thumbnail'}
          key={offer.id}
          offer={offer}
        />
      ))}
    </OfferHomeFeedLayout>
  );
}
