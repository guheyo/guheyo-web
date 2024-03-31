import { DealStatus } from '@/lib/deal/deal.types';
import { parseDealStatusLabel } from '@/lib/deal/parse-deal-status-label';
import { parsePrice } from '@/lib/deal/parse-price';

export default function DealPreviewPrice({
  dealStatus,
  totalPrice,
}: {
  dealStatus: DealStatus;
  totalPrice: number;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-sm md:text-base font-semibold">
      {dealStatus !== 'open' && (
        <div className="text-light-200 bg-dark-200 px-1.5 py-0.5 rounded">
          {parseDealStatusLabel(dealStatus)}
        </div>
      )}
      {parsePrice(totalPrice)}
    </div>
  );
}
