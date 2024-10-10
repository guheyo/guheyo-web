import { FontSize } from '../font/font.types';

export const convertAvatarSize = (fontSize: FontSize): number => {
  if (fontSize === 'text-3xs') return 16;
  if (fontSize === 'text-2xs') return 20;
  if (fontSize === 'text-xs') return 24;
  if (fontSize === 'text-sm') return 28;
  if (fontSize === 'text-base') return 32;
  if (fontSize === 'text-lg') return 36;
  if (fontSize === 'text-xl') return 40;
  if (fontSize === 'text-2xl') return 44;
  if (fontSize === 'text-3xl') return 48;
  if (fontSize === 'text-4xl') return 52;
  if (fontSize === 'text-5xl') return 56;
  if (fontSize === 'text-6xl') return 60;
  if (fontSize === 'text-7xl') return 64;
  if (fontSize === 'text-8xl') return 68;
  if (fontSize === 'text-9xl') return 72;

  return 32;
};
