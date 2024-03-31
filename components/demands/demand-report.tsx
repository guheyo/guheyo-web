'use client';

import { useFindDemandQuery } from '@/generated/graphql';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';

export default function DemandReport({ slug }: { slug: string }) {
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
    <>
      <ReportHeader
        name={demand.name}
        price={demand.price}
        author={demand.buyer}
        updatedAt={demand.updatedAt}
      />
      <ReportFeed
        type="demand"
        refId={demand.id}
        reportedUserId={demand.buyer.id}
      />
    </>
  );
}
