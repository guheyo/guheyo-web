'use client';

import { useGroup } from '@/hooks/use-group';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function WriteButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { group, loading: isGroupLoading } = useGroup();

  if (isGroupLoading) return <div />;
  if (!group?.slug) return <div />;
  const { slug } = group;

  const handleOnClick = (): void => {
    setLoading(true);
    router.push(`/write/g/${slug}/offer`);
    setLoading(false);
  };

  return (
    <div className="inline-flex items-center">
      <LoadingButton
        type="submit"
        loading={loading}
        className="text-xs md:text-sm font-bold text-light-200"
        name={`${slug} 그룹 장터에서 글쓰기`}
        onClick={handleOnClick}
      >
        <AddIcon />
      </LoadingButton>
    </div>
  );
}
