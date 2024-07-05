'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import HomeLinkLayout from '../home/home-link.layout';

function SwapHomeLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <HomeLinkLayout path={businessFunction}>
      <SwapHorizIcon />
      <div>교환</div>
    </HomeLinkLayout>
  );
}

export default SwapHomeLink;
