'use client';

import { useFindOfferPreviewsQuery } from '@/generated/graphql';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { useGroup } from '@/hooks/use-group';
import OfferHomeFeedLayout from './offer-home-feed.layout';
import OfferPreview from './offer-preview';

export default function OfferHome({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  const { group } = useGroup();
  const { loading, data } = useFindOfferPreviewsQuery({
    variables: {
      where: {
        groupId: group?.id,
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
      hideGroupProfileNavbarItems
      showChannels={false}
      showCategories={false}
      showSelectors={false}
      showMoreLink
    >
      {offers.map((offer) => (
        <OfferPreview
          type={businessFunction === 'buy' ? 'text' : 'thumbnail'}
          key={offer.id}
          offer={offer}
          displayGroup={!group}
        />
      ))}
    </OfferHomeFeedLayout>
  );
}
