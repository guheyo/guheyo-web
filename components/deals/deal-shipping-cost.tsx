import { parseShippingCost } from '@/lib/shipping/parse-shipping-cost';

export default function DealShippingCost({
  shippingCost,
  shippingType,
}: {
  shippingCost: number;
  shippingType: string;
}) {
  return (
    <div className="text-sm md:text-base items-center font-thin text-light-200">
      {parseShippingCost({ shippingCost, shippingType })}
    </div>
  );
}
