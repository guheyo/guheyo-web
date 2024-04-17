import { DAILY_OFFER_POSTING_LIMIT } from './offer.constants';

export const validateOfferTerm = (count: number) =>
  count <= DAILY_OFFER_POSTING_LIMIT;
