'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import OfferHomeLinkLayout from './offer-home-link.layout';

function SwapHomeLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <OfferHomeLinkLayout businessFunction={businessFunction}>
      <SwapHorizIcon />
      <div>교환</div>
    </OfferHomeLinkLayout>
  );
}

export default SwapHomeLink;
