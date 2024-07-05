'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import OfferHomeLinkLayout from './offer-home-link.layout';

function BuyHomeLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <OfferHomeLinkLayout businessFunction={businessFunction}>
      <ShoppingBagIcon />
      <div>구매</div>
    </OfferHomeLinkLayout>
  );
}

export default BuyHomeLink;
