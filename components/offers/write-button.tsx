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
        className="text-xs md:text-sm font-bold text-gray-300"
        sx={{
          padding: '6px', // Add padding to match IconButton size
          minWidth: 0, // Set minimum width to 0
          width: 'auto', // Adjust width dynamically
          borderRadius: '50%', // Make the button circular
          overflow: 'hidden', // Hide overflow content (if any)
          '&:hover': {
            backgroundColor: 'transparent', // Match IconButton hover effect
          },
        }}
        name={`${slug} 그룹 장터에서 글쓰기`}
        onClick={handleOnClick}
      >
        <AddIcon className="text-2xl" />
      </LoadingButton>
    </div>
  );
}
