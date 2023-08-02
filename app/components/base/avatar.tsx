'use client';

import { Avatar as MuiAvatar } from '@mui/material';
export default function Avatar({
  name,
  avatarURL,
}: {
  name: string;
  avatarURL?: string | null;
}) {
  return (
    <MuiAvatar
      alt={`${name} avatar`}
      src={avatarURL || '/dongwang-gray.svg'}
      className="w-8 h-8 bg-zinc-200"
    />
  );
}
