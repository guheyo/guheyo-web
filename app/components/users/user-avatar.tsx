import { User } from 'prisma';
import { Avatar } from '@material-tailwind/react';
import { memo } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface Props {
  user: User;
  size: Size;
}

const UserAvatar = ({ user, size }: Props) => {
  return (
    <Avatar
      src={user.avatarURL ? user.avatarURL : '/dongwang-gray.svg'}
      alt={`${user.username} avatar`}
      size={size}
    />
  );
};

export default memo(UserAvatar);
