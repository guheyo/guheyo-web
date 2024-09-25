'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { isMobile } from 'react-device-detect';
import { CommunityChannelType } from '@/lib/community/community.types';

export default function CommunityMoreLink({
  communityChannelType,
}: {
  communityChannelType: CommunityChannelType;
}) {
  return (
    <Link href={`/${communityChannelType}`}>
      <span className="flex flex-row items-center gap-1">
        <PlayCircleOutlineOutlinedIcon
          fontSize={isMobile ? 'small' : 'medium'}
        />
        커뮤니티
      </span>
    </Link>
  );
}
