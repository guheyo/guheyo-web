'use client';

import { useFindDemandQuery } from '@/generated/graphql';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
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

  const where: FindReportPreviewsWhereArgs = {
    type: 'demand',
    refId: demand.id,
    reportedUserId: demand.buyer.id,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'asc',
  };

  return (
    <>
      <ReportHeader
        name={demand.name}
        price={demand.price}
        author={demand.buyer}
        updatedAt={demand.updatedAt}
      />
      <ReportFeed where={where} orderBy={orderBy} />
    </>
  );
}
