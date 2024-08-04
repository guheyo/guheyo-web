'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { isMobile } from 'react-device-detect';

export default function GbMoreLink() {
  return (
    <Link href="/community">
      <span className="flex flex-row items-center gap-1">
        <PlayCircleOutlineOutlinedIcon
          fontSize={isMobile ? 'small' : 'medium'}
        />
        공동구매
      </span>
    </Link>
  );
}
