import { BUSINESS_FUNCTION_OPTIONS } from '../offer/offer.constants';

export const OFFER_CHANNELS = ['sell', 'buy', 'swap'];

export const MARKET_CHANNELS = ['auction', ...OFFER_CHANNELS];

export const MARKET_CHANNEL_OPTIONS = [
  ...BUSINESS_FUNCTION_OPTIONS,
  { value: 'gb', label: '공동구매' },
];
