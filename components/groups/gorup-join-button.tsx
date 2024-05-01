'use client';

import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function GroupJoinButton({ slug }: { slug: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const join = (): void => {
    setLoading(true);
    router.push(`g/${slug}/sell`);
    setLoading(false);
  };

  return (
    <div className="inline-flex items-center">
      <LoadingButton
        type="submit"
        loading={loading}
        className="bg-gray-500 hover:bg-dark-200 text-xs lg:text-sm font-bold px-0 py-1.5 rounded text-gray-300"
        name={`${slug} 그룹에 입장하기`}
        onClick={() => join()}
      >
        입장
      </LoadingButton>
    </div>
  );
}
