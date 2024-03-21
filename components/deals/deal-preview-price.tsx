import { parsePrice } from '@/lib/deal/parse-price';

export default function DealPreviewPrice({
  totalPrice,
}: {
  totalPrice: number;
}) {
  return (
    <div className="flex-none text-sm md:text-base font-semibold">
      {parsePrice(totalPrice)}
    </div>
  );
}
