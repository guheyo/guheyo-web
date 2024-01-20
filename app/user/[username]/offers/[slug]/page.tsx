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
  const { loading, error, data } = useFindOfferQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findOffer) return <div>null</div>;

  return <OfferDetail offer={data.findOffer} />;
}

export default OfferPage;
