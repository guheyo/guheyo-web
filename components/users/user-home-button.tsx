'use client';

import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function UserHomeButton({ username }: { username: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const join = (): void => {
    setLoading(true);
    router.push(`/user/${username}`);
    setLoading(false);
  };

  return (
    <div className="inline-flex items-center">
      <LoadingButton
        type="submit"
        loading={loading}
        className="bg-dark-200 hover:bg-zinc-400 text-xs md:text-sm font-bold px-2 py-1.5 rounded text-light-200"
        name={`${username} 프로필`}
        onClick={() => join()}
      >
        프로필
      </LoadingButton>
    </div>
  );
}
