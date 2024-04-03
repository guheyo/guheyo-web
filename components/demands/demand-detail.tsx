'use client';

import { useFindDemandQuery } from '@/generated/graphql';
import { DealStatus } from '@/lib/deal/deal.types';
import DealDetail from '../deals/deal-detail';

export default function DemandDetail({ slug }: { slug: string }) {
  const { loading, data } = useFindDemandQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findDemand) return <div />;
  const demand = data.findDemand;

  return (
    <DealDetail
      id={demand.id}
      dealType="demand"
      dealStatus={demand.status as DealStatus}
      name0={demand.name}
      slug={demand.slug!}
      price={demand.price}
      shippingCost={demand.shippingCost}
      shippingType={demand.shippingType}
      description={demand.description}
      bumpedAt={demand.bumpedAt}
      author={demand.buyer}
      images={demand.images}
      reportCount={demand.reportCount}
      reportCommentCount={demand.reportCommentCount}
    />
  );
}
