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
        className="bg-eye-500 hover:bg-eye-400 text-sm font-bold p-2 rounded text-light-200"
        onClick={() => join()}
      >
        입장
      </button>
    </div>
  );
}
