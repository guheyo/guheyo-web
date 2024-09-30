export const WRITABLE_CHANNELS = [
  'auction',
  'sell',
  'buy',
  'swap',
  'gb',
  'community',
];

export const NON_WRITABLE_CHANNELS = ['brand', 'member', 'review', 'report'];

export const ALL_CHANNELS = [...WRITABLE_CHANNELS, ...NON_WRITABLE_CHANNELS];
