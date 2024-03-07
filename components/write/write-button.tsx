'use client';

import { useGroup } from '@/hooks/use-group';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function WriteButton() {
  const router = useRouter();
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group?.slug) return <div />;
  const { slug } = group;

  const handleOnClick = (): void => {
    router.push(`/write/g/${slug}/market`);
  };

  return (
    <div className="inline-flex items-center">
      <button
        type="submit"
        className="bg-star-500 hover:bg-star-400 text-sm font-bold px-2 py-1.5 rounded text-light-200"
        name={`${slug} 그룹 마켓에서 글쓰기`}
        onClick={handleOnClick}
      >
        글쓰기
      </button>
    </div>
  );
}
