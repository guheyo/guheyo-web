'use client';

import OfferVersionDetail from '@/components/offers/offer-version-detail';
import { useFindVersionQuery } from '@/generated/graphql';

function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { loading, data } = useFindVersionQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findVersion) return <div />;
  const version = data.findVersion;

  return (
    <OfferVersionDetail
      versionCreatedAt={version.createdAt}
      images={version.images}
      offerStatus={version.values.status}
      name0={version.values.name}
      slug={version.values.slug!}
      price={version.values.price}
      shippingCost={version.values.shippingCost}
      shippingType={version.values.shippingType}
      description={version.values.description}
      authorId={version.values.sellerId}
    />
  );
}

export default Page;
