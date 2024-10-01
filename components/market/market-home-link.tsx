'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeLinkLayout from '../home/home-link.layout';

function MarketHomeLink({
  businessFunction,
}: {
  businessFunction: BusinessFunction;
}) {
  return (
    <HomeLinkLayout path={businessFunction}>
      <StorefrontIcon />
      <div>경매 / 거래</div>
    </HomeLinkLayout>
  );
}

export default MarketHomeLink;
