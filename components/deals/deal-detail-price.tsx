import { parsePrice } from '@/lib/deal/parse-price';

export default function DealDetailPrice({ price }: { price: number }) {
  return (
    <div className="text-base md:text-lg items-center font-semibold">
      {parsePrice(price)}
    </div>
  );
}
