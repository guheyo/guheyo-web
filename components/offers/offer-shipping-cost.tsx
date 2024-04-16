import { parseShippingCost } from '@/lib/shipping/parse-shipping-cost';
import { ShippingType } from '@/lib/shipping/shipping.types';

export default function OfferShippingCost({
  shippingCost,
  shippingType,
}: {
  shippingCost: number;
  shippingType: ShippingType;
}) {
  return (
    <div className="text-sm md:text-base items-center font-thin text-light-200">
      {parseShippingCost({ shippingCost, shippingType })}
    </div>
  );
}
