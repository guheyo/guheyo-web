'use client';

import { useFindSwapQuery } from '@/generated/graphql';
import { parseSwapName } from '@/lib/swap/parse-swap-name';
import ReportFeed from '../reports/report-feed';
import ReportHeader from '../reports/report-header';

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
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-8 w-full md:w-3/4">
        <ReportHeader
          name={parseSwapName({ name0: swap.name0, name1: swap.name1 })}
          price={swap.price}
          author={swap.proposer}
          updatedAt={swap.updatedAt}
        />
        <ReportFeed type="swap" swapId={swap.id} />
      </div>
    </div>
  );
}
