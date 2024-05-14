import { parsePrice } from '../offer/parse-price';
import { ShippingType } from './shipping.types';

export const parseShippingCost = ({
  shippingCost,
  shippingType,
}: {
  shippingCost: number;
  shippingType: ShippingType;
}) => {
  const won = parsePrice(shippingCost);
  if (shippingType === 'prepaid') return `택배비 ${won}`;
  if (shippingType === 'half') return `반값 택배 ${won}`;
  return `택배비 포함`;
};
