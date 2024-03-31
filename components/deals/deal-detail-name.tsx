import { DealStatus } from '@/lib/deal/deal.types';
import { parseDealStatusLabel } from '@/lib/deal/parse-deal-status-label';
import SwapName from '../swaps/swap-name';

export default function DealDetailName({
  dealStatus,
  name0,
  name1,
}: {
  dealStatus: DealStatus;
  name0: string;
  name1?: string;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-base md:text-lg font-semibold">
      {dealStatus !== 'open' && (
        <div className="text-light-200 bg-dark-200 px-1.5 rounded">
          {parseDealStatusLabel(dealStatus)}
        </div>
      )}
      {name1 ? <SwapName name0={name0} name1={name1} /> : name0}
    </div>
  );
}
