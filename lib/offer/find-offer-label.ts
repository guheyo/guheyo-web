import { OFFER_OPTIONS } from './offer.constants';
import { BusinessFunction } from './offer.types';

export const findOfferLabel = (businessFunction: BusinessFunction) =>
  OFFER_OPTIONS.find((option) => option.value === businessFunction)!.label;
