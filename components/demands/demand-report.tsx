'use client';

import { useFindDemandQuery } from '@/generated/graphql';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';

export default function DemandReport({ slug }: { slug: string }) {
  const { loading, data } = useFindDemandQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });

  if (loading) return <div />;
  if (!data?.findDemand) return <div />;
  const demand = data.findDemand;

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-8 w-full md:w-3/4">
        <ReportHeader
          name={demand.name}
          price={demand.price}
          author={demand.buyer}
          updatedAt={demand.updatedAt}
        />
        <ReportFeed type="demand" demandId={demand.id} />
      </div>
    </div>
  );
}
