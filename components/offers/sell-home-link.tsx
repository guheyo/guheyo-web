'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import SellIcon from '@mui/icons-material/Sell';
import HomeLinkLayout from '../home/home-link.layout';

function SellHomeLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <HomeLinkLayout path={businessFunction}>
      <SellIcon />
      <div>판매</div>
    </HomeLinkLayout>
  );
}

export default SellHomeLink;
