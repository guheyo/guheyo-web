export const WRITABLE_CHANNELS = [
  'auction',
  'offer',
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
    value: 'offer',
    label: '거래',
  },
  {
    value: 'community',
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

export const GROUP_PREFIXED_ALL_CHANNELS = ALL_CHANNELS.map(
  (channel) => `group-${channel}`,
);
