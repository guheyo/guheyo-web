import { BusinessFunction } from './offer.types';

export const parseMarketLink = ({
  groupSlug,
  businessFunction,
}: {
  groupSlug?: string | null;
  businessFunction: BusinessFunction;
}) =>
  groupSlug ? `/g/${groupSlug}/${businessFunction}` : `/${businessFunction}`;
