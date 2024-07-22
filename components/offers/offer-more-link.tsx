'use client';

import Link from 'next/link';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { isMobile } from 'react-device-detect';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { parseBusinessFunctionLabel } from '@/lib/offer/parse-business-function-label';

export default function OfferMoreLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <Link href={`/${businessFunction}`}>
      <span className="flex flex-row items-center gap-1">
        <PlayCircleOutlineOutlinedIcon
          fontSize={isMobile ? 'small' : 'medium'}
        />
        {parseBusinessFunctionLabel({ businessFunction })}
      </span>
    </Link>
  );
}
