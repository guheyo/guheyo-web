import { User } from 'prisma';
import { Avatar as MuiAvatar } from '@mui/material';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const convertAvatarSize = (avatarSize: Size): string => {
  if (avatarSize === 'xs') return '24px';
  if (avatarSize === 'sm') return '36px';
  if (avatarSize === 'md') return '48px';
  if (avatarSize === 'lg') return '60px';
  if (avatarSize === 'xl') return '72px';
  if (avatarSize === 'xxl') return '84px';

  return '24px';
};

export default function UserAvatar({ user, size }: { user: User; size: Size }) {
  const avatarSize = convertAvatarSize(size);

  return (
    <MuiAvatar
      alt={`${user.username} avatar`}
      src={user.avatarURL || '/dongwang-gray.svg'}
      sx={{
        width: avatarSize,
        height: avatarSize,
      }}
      className="rounded-full bg-zinc-200"
      variant="rounded"
    />
  );
}
