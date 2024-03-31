'use client';

import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function GroupJoinButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const join = (): void => {
    setLoading(true);
    router.push(`g/${slug}`);
  };

  return (
    <div className="inline-flex items-center">
      <LoadingButton
        type="submit"
        loading={loading}
        className="bg-star-500 hover:bg-star-400 text-sm font-bold px-2 py-1.5 rounded text-light-200"
        name={`${slug} 그룹에 입장하기`}
        onClick={() => join()}
      >
        입장
      </LoadingButton>
    </div>
  );
}
