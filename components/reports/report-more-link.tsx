'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { isMobile } from 'react-device-detect';

export default function ReportMoreLink() {
  return (
    <Link href="/report">
      <span className="flex flex-row items-center gap-1">
        <PlayCircleOutlineOutlinedIcon
          fontSize={isMobile ? 'small' : 'medium'}
        />
        신고
      </span>
    </Link>
  );
}
