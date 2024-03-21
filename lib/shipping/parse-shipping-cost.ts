import { parsePrice } from '../deal/parse-price';

export const parseShippingCost = ({
  shippingCost,
  shippingType,
}: {
  shippingCost: number;
  shippingType: string;
}) => {
  const won = parsePrice(shippingCost);
  if (shippingType === 'charge') return `택배비 ${won}`;
  if (shippingType === 'half') return `반값 택배 ${won}`;
  return `택배비 포함`;
};
