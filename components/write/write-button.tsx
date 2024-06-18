'use client';

import { LoadingButton } from '@mui/lab';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { extractGroupAndChannel } from '@/lib/group/extract-group-and-channel';
import { parseWriteLink } from '@/lib/write/parse-write-link';

export default function WriteButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const { groupSlug, channelSlug } = extractGroupAndChannel(pathname);

  const handleOnClick = (): void => {
    setLoading(true);
    if (groupSlug && channelSlug) {
      router.push(parseWriteLink({ groupSlug, channelSlug }));
    } else if (channelSlug === 'auction') {
      router.push(parseWriteLink({ groupSlug: undefined, channelSlug }));
    }
    setLoading(false);
  };

  if (!channelSlug || !['auction', 'offer'].includes(channelSlug))
    return <div />;

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
        name={`${groupSlug} 그룹 ${channelSlug} 포스트 작성하기`}
        onClick={handleOnClick}
      >
        <AddIcon className="text-2xl" />
      </LoadingButton>
    </div>
  );
}
