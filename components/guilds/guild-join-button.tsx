'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function GuildJoinButton({ slug }: { slug: string }) {
  const router = useRouter();

  const join = (): void => {
    router.push(`g/${slug}`);
  };

  return (
    <div className="inline-flex items-center">
      <button
        type="submit"
        className="bg-star-500 hover:bg-star-400 text-sm font-bold px-2 py-1.5 rounded text-light-200"
        name={`${slug} 길드에 입장하기`}
        onClick={() => join()}
      >
        입장
      </button>
    </div>
  );
}
