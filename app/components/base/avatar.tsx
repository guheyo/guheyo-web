'use client';

import Image from "next/image";

export default function Avatar({
  name,
  avatarURL
}: {
  name: string,
  avatarURL?: string | null
}) {
  return (
    <Image
      src={ avatarURL || '/dongwang-gray.svg'}
      alt={`${name} avatar`}
      className="dark:invert rounded-full"
      width={32}
      height={32}
      priority
    />
  );
};