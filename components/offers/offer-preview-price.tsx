import { OfferStatus } from '@/lib/offer/offer.types';
import { parseOfferStatusLabel } from '@/lib/offer/parse-offer-status-label';
import { parsePrice } from '@/lib/offer/parse-price';

export default function OfferPreviewPrice({
  offerStatus,
  totalPrice,
}: {
  offerStatus: OfferStatus;
  totalPrice: number;
}) {
  return (
    <div className="flex flex-row gap-2 items-center text-sm md:text-base font-semibold">
      {offerStatus !== 'open' && (
        <div className="text-light-200 bg-dark-200 px-1 py-0.5 rounded text-xs md:text-sm">
          {parseOfferStatusLabel(offerStatus)}
        </div>
      )}
      {parsePrice(totalPrice)}
    </div>
  );
}
