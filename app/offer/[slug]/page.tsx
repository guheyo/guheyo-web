'use client';

import OfferDetail from '@/components/offers/offer-detail';
import { useFindOfferQuery } from '@/generated/graphql';

function OfferPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { data, loading } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });
  if (loading) return <div />;
  if (!data?.findOffer) return <div />;

  const offer = data.findOffer;
  return <OfferDetail offer={offer} />;
}

export default OfferPage;
