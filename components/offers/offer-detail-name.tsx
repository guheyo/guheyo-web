import { OfferStatus } from '@/lib/offer/offer.types';
import { parseOfferStatusLabel } from '@/lib/offer/parse-offer-status-label';
import SwapName from '../swaps/swap-name';

export default function OfferDetailName({
  offerStatus,
  name0,
  name1,
}: {
  offerStatus: OfferStatus;
  name0: string;
  name1?: string | null;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-base md:text-lg font-semibold">
      {offerStatus !== 'open' && (
        <div className="text-light-200 bg-dark-200 px-1.5 rounded">
          {parseOfferStatusLabel(offerStatus)}
        </div>
      )}
      {name1 ? <SwapName name0={name0} name1={name1} /> : name0}
    </div>
  );
}
