import { BusinessFunction } from './offer.types';

export const parseBusinessFunctionLabel = ({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) => {
  if (businessFunction === 'sell') return '판매';
  if (businessFunction === 'buy') return '구매';
  return '교환';
};
