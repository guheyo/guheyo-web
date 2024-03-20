'use client';

import { useFindDemandQuery } from '@/generated/graphql';
import DealDetail from '../deals/deal-detail';

export default function DemandDetail({ slug }: { slug: string }) {
  const { loading, data } = useFindDemandQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'network-only',
  });

  if (loading) return <div />;
  if (!data?.findDemand) return <div />;
  const demand = data.findDemand;

  return (
    <DealDetail
      dealType="demand"
      id={demand.id}
      name0={demand.name}
      slug={demand.slug!}
      price={demand.price}
      description={demand.description}
      bumpedAt={demand.bumpedAt}
      author={demand.buyer}
      images={demand.images}
      reports={demand.reports}
    />
  );
}
