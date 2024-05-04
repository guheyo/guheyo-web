import { FontSize } from '@/lib/font/font.types';
import { Avatar as MuiAvatar } from '@mui/material';

const convertAvatarSize = (fontSize: FontSize): string => {
  if (fontSize === 'text-xs') return '24px';
  if (fontSize === 'text-sm') return '28px';
  if (fontSize === 'text-base') return '32px';
  if (fontSize === 'text-lg') return '36px';
  if (fontSize === 'text-xl') return '40px';
  if (fontSize === 'text-2xl') return '44px';
  if (fontSize === 'text-3xl') return '48px';
  if (fontSize === 'text-4xl') return '52px';
  if (fontSize === 'text-5xl') return '56px';
  if (fontSize === 'text-6xl') return '60px';
  if (fontSize === 'text-7xl') return '64px';
  if (fontSize === 'text-8xl') return '68px';
  if (fontSize === 'text-9xl') return '72px';

  return '32px';
};

export default function Avatar({
  name,
  src,
  fontSize,
}: {
  name: string;
  src?: string | null;
  fontSize: FontSize;
}) {
  const avatarSize = convertAvatarSize(fontSize);

  return (
    <MuiAvatar
      alt={`${name}`}
      src={src || '/dongwang/dongwang-gray.svg'}
      sx={{
        width: avatarSize,
        height: avatarSize,
      }}
    />
  );
}
