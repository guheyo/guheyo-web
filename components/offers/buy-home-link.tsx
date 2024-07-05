'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeLinkLayout from '../home/home-link.layout';

function BuyHomeLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <HomeLinkLayout path={businessFunction}>
      <ShoppingBagIcon />
      <div>구매</div>
    </HomeLinkLayout>
  );
}

export default BuyHomeLink;
