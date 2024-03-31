'use client';

import DealVersionDetail from '@/components/deals/deal-version-detail';
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
    fetchPolicy: 'network-only',
  });

  if (loading) return <div />;
  if (!data?.findVersion) return <div />;
  const version = data.findVersion;

  return (
    <DealVersionDetail
      versionCreatedAt={version.createdAt}
      images={version.images}
      dealType="demand"
      dealStatus={version.values.status}
      name0={version.values.name}
      slug={version.values.slug!}
      price={version.values.price}
      shippingCost={version.values.shippingCost}
      shippingType={version.values.shippingType}
      description={version.values.description}
      authorId={version.values.buyerId}
    />
  );
}

export default Page;
