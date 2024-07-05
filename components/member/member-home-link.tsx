'use client';

import GroupIcon from '@mui/icons-material/Group';
import Link from 'next/link';

function MemberHomeLink() {
  return (
    <Link href="/auction">
      <div className="flex flex-row gap-4 items-center text-gray-200 text-base md:text-lg font-semibold pt-4 pb-2">
        <GroupIcon />
        <div>멤버</div>
      </div>
    </Link>
  );
}

export default MemberHomeLink;
