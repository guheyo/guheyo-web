export const parseShippingCost = ({
  shippingCost,
  shippingType,
}: {
  shippingCost: number;
  shippingType: string;
}) => {
  if (shippingType === 'charge') return `택배비 ${shippingCost}원`;
  if (shippingType === 'half') return `반값 택배 ${shippingCost}원}`;
  return `택배비 포함`;
};
