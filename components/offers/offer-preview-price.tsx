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
    <div className="flex flex-row gap-2 items-center">
      {offerStatus !== 'open' && (
        <div className="text-gray-300 bg-dark-200 px-1 py-0.5 rounded text-xs md:text-sm">
          {parseOfferStatusLabel(offerStatus)}
        </div>
      )}
      <div className="text-sm md:text-base font-semibold">
        {parsePrice(totalPrice)}
      </div>
    </div>
  );
}
