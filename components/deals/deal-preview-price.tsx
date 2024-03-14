import { getPrice } from '@/lib/formatter';

export default function DealPreviewPrice({ price }: { price: number }) {
  return (
    <div className="flex-none text-sm md:text-base font-semibold">
      {getPrice(price)}
    </div>
  );
}
