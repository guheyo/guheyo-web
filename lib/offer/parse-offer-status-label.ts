import { OFFER_STATUS_OPTIONS } from './offer.constants';
import { OfferStatus } from './offer.types';

export const parseOfferStatusLabel = (status: OfferStatus) =>
  OFFER_STATUS_OPTIONS.find((option) => option.value === status)?.label;
