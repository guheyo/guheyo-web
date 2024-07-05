'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import SellIcon from '@mui/icons-material/Sell';
import OfferHomeLinkLayout from './offer-home-link.layout';

function SellHomeLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <OfferHomeLinkLayout businessFunction={businessFunction}>
      <SellIcon />
      <div>판매</div>
    </OfferHomeLinkLayout>
  );
}

export default SellHomeLink;
