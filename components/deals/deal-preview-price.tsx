import { getPrice } from '@/lib/formatter';

export default function DealPreviewPrice({
  totalPrice,
}: {
  totalPrice: number;
}) {
  return (
    <div className="flex-none text-sm md:text-base font-semibold">
      {getPrice(totalPrice)}
    </div>
  );
}
