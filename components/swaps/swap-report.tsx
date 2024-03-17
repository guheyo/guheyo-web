'use client';

import { useFindSwapQuery } from '@/generated/graphql';
import { parseSwapName } from '@/lib/swap/parse-swap-name';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';
import ReportHomeLayout from '../reports/report-home.layout';

export default function SwapReport({ slug }: { slug: string }) {
  const { loading, data } = useFindSwapQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });

  if (loading) return <div />;
  if (!data?.findSwap) return <div />;
  const swap = data.findSwap;

  return (
    <ReportHomeLayout>
      <ReportHeader
        name={parseSwapName({ name0: swap.name0, name1: swap.name1 })}
        price={swap.price}
        author={swap.proposer}
        updatedAt={swap.updatedAt}
      />
      <ReportFeed
        type="swap"
        refId={swap.id}
        reportedUserId={swap.proposer.id}
      />
    </ReportHomeLayout>
  );
}