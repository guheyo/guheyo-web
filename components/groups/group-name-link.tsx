'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

export default function GroupNameLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  const router = useRouter();
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-row gap-2 items-center break-all text-gray-400 text-[10px] md:text-xs font-semibold"
    >
      {name}
    </button>
  );
}
