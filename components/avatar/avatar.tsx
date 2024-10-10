import { convertAvatarSize } from '@/lib/avatar/convert-avatar-size';
import { FontSize } from '@/lib/font/font.types';
import { Avatar as MuiAvatar } from '@mui/material';

export default function Avatar({
  name,
  src,
  fontSize,
  variant = 'circular',
}: {
  name: string;
  src?: string | null;
  fontSize: FontSize;
  variant?: 'circular' | 'rounded' | 'square';
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
      variant={variant}
    />
  );
}
