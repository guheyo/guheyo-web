'use client';

import GavelIcon from '@mui/icons-material/Gavel';
import Link from 'next/link';

function AuctionHomeLink() {
  return (
    <Link href="/auction">
      <div className="flex flex-row gap-4 items-center text-gray-200 text-base md:text-lg font-semibold pt-4 pb-2">
        <GavelIcon />
        <div>경매</div>
      </div>
    </Link>
  );
}

export default AuctionHomeLink;
