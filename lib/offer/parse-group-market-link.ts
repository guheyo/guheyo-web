import { BusinessFunction } from './offer.types';

export const parseGroupMarketLink = ({
  groupSlug,
  businessFunction,
}: {
  groupSlug: string;
  businessFunction: BusinessFunction;
}) => `/g/${groupSlug}/market/${businessFunction}`;
