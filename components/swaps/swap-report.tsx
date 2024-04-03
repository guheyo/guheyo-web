'use client';

import { useFindSwapQuery } from '@/generated/graphql';
import { parseSwapName } from '@/lib/swap/parse-swap-name';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';

export default function SwapReport({ slug }: { slug: string }) {
  const { loading, data } = useFindSwapQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findSwap) return <div />;
  const swap = data.findSwap;

  const where: FindReportPreviewsWhereArgs = {
    type: 'swap',
    refId: swap.id,
    reportedUserId: swap.proposer.id,
  };
  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'asc',
  };

  return (
    <>
      <ReportHeader
        name={parseSwapName({ name0: swap.name0, name1: swap.name1 })}
        price={swap.price}
        author={swap.proposer}
        updatedAt={swap.updatedAt}
      />
      <ReportFeed where={where} orderBy={orderBy} />
    </>
  );
}
