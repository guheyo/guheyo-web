'use client';

import { LoadingButton } from '@mui/lab';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { extractGroupAndChannel } from '@/lib/group/extract-group-and-channel';
import { parseWriteLink } from '@/lib/write/parse-write-link';
import { ALL_CHANNELS } from '@/lib/write/write.constants';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { ComponentSize } from '@/lib/component/component.types';

export default function WriteButton({ size }: { size: ComponentSize }) {
  const router = useRouter();
  const device = useDeviceDetect();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const { groupSlug, channelSlug } = extractGroupAndChannel(pathname);

  const handleOnClick = (): void => {
    setLoading(true);
    if (channelSlug && ALL_CHANNELS.includes(channelSlug)) {
      router.push(
        parseWriteLink({ groupSlug: groupSlug || undefined, channelSlug }),
      );
    }
    setLoading(false);
  };

  const parseSize = () => {
    if (size === 'small') return 'text-2xl';
    if (size === 'medium') return 'text-3xl';
    return 'text-4xl';
  };

  if (!channelSlug || !ALL_CHANNELS.includes(channelSlug)) return <div />;

  return (
    <div className="inline-flex items-center">
      <LoadingButton
        type="submit"
        loading={loading}
        className="text-xs md:text-sm font-bold text-gray-300 rounded-lg"
        sx={{
          padding: '6px', // Add padding to match IconButton size
          minWidth: 0, // Set minimum width to 0
          width: 'auto', // Adjust width dynamically
          overflow: 'hidden', // Hide overflow content (if any)
          '&:hover': {
            backgroundColor: 'transparent', // Match IconButton hover effect
          },
        }}
        name={`${groupSlug} 그룹 ${channelSlug} 포스트 작성하기`}
        onClick={handleOnClick}
      >
        <AddIcon className={parseSize()} />
        {device === 'browser' && '업로드'}
      </LoadingButton>
    </div>
  );
}
