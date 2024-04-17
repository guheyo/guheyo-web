import { parsePrice } from '@/lib/offer/parse-price';

export default function OfferDetailPrice({ price }: { price: number }) {
  return (
    <div className="text-base md:text-lg items-center font-semibold">
      {parsePrice(price)}
    </div>
  );
}
