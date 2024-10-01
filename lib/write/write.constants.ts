export const WRITABLE_CHANNELS = [
  'auction',
  'sell',
  'buy',
  'swap',
  'gb',
  'community',
];

export const WRITABLE_CHANNEL_OPTIONS = [
  {
    value: 'auction',
    label: '경매',
  },
  {
    value: 'sell',
    label: '판매',
  },
  {
    value: 'buy',
    label: '구매',
  },
  {
    value: 'swap',
    label: '교환',
  },
  {
    value: 'gb',
    label: '공동구매',
  },
  {
    value: 'community',
    label: '커뮤니티',
  },
];

export const NON_WRITABLE_CHANNELS = ['brand', 'member', 'review', 'report'];

export const ALL_CHANNELS = [...WRITABLE_CHANNELS, ...NON_WRITABLE_CHANNELS];
