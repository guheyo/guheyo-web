'use client';

import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { parseWriteLink } from '@/lib/write/parse-write-link';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { ComponentSize } from '@/lib/component/component.types';
import { parseIconSize } from '@/lib/icon/parse-icon-size';

export default function WriteLink({
  groupSlug,
  channelSlug,
  size,
}: {
  groupSlug: string | null;
  channelSlug: string;
  size: ComponentSize;
}) {
  const router = useRouter();
  const device = useDeviceDetect();
  const [loading, setLoading] = useState(false);

  const handleOnClick = (): void => {
    setLoading(true);
    router.push(
      parseWriteLink({ groupSlug: groupSlug || undefined, channelSlug }),
    );
    setLoading(false);
  };

  return (
    <div className="inline-flex items-center">
      <LoadingButton
        type="submit"
        loading={loading}
        className="text-xs md:text-sm font-bold text-gray-300 rounded-full"
        sx={{
          minWidth: 0, // Set minimum width to 0
        }}
        name={`${groupSlug} 그룹 ${channelSlug} 포스트 작성하기`}
        onClick={handleOnClick}
      >
        <AddIcon className={parseIconSize(size)} />
        {device === 'browser' && '업로드'}
      </LoadingButton>
    </div>
  );
}
