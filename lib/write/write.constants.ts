export const WRITABLE_CHANNELS = [
  'auction',
  'offer',
  'sell',
  'buy',
  'swap',
  'gb',
  'thread',
];

export const WRITABLE_CHANNEL_OPTIONS = [
  {
    value: 'auction',
    label: '경매',
  },
  {
    value: 'offer',
    label: '거래',
  },
  {
    value: 'thread',
    label: '포스팅',
  },
];

export const NON_WRITABLE_CHANNELS = [
  'group',
  'brand',
  'member',
  'review',
  'report',
];

export const ALL_CHANNELS = [...WRITABLE_CHANNELS, ...NON_WRITABLE_CHANNELS];

export const EDITOR_ACTIONS = ['write', 'edit'];
