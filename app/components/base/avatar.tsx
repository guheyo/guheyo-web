'use client';

import Image from 'next/image';
import { memo } from 'react';

interface Props {
  name: string;
  avatarURL?: string | null;
}

const Avatar = ({ name, avatarURL }: Props) => {
  return (
    <Image
      src={avatarURL || '/dongwang-gray.svg'}
      alt={`${name} avatar`}
      className="dark:invert rounded-full"
      width={32}
      height={32}
      priority
    />
  );
};

export default memo(Avatar);
