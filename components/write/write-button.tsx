'use client';

import { LoadingButton } from '@mui/lab';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { extractGroupAndChannel } from '@/lib/group/extract-group-and-channel';

export default function WriteButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const { groupName, channelName } = extractGroupAndChannel(pathname);

  const handleOnClick = (): void => {
    if (!groupName && !channelName) return;

    setLoading(true);
    router.push(`/write/g/${groupName}/${channelName}`);
    setLoading(false);
  };

  if (!groupName) return <div />;
  if (!['auction', 'offer'].includes(channelName)) return <div />;

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
        name={`${groupName} 그룹 ${channelName} 포스트 작성하기`}
        onClick={handleOnClick}
      >
        <AddIcon className="text-2xl" />
      </LoadingButton>
    </div>
  );
}
