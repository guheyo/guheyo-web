import { getPrice } from '@/lib/formatter';

export default function DealDetailPrice({ price }: { price: number }) {
  return (
    <div className="text-base md:text-lg items-center font-semibold">
      {getPrice(price)}
    </div>
  );
}
