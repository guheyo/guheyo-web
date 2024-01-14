'use client';

import OfferDetail from '@/components/offers/offer-detail';
import { useFindOfferByIdQuery } from '@/generated/graphql';

function OfferPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { loading, error, data } = useFindOfferByIdQuery({
    variables: {
      id,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return <OfferDetail offer={data?.findOfferById!} />;
}

export default OfferPage;
