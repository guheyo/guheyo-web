import { BusinessFunction } from './offer.types';

export const parseOfferPriceName = (businessFunction: BusinessFunction) =>
  businessFunction === 'swap' ? '내 추가금' : '가격';
