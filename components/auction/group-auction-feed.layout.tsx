'use client';

import { ReactNode } from 'react';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import AuctionSelectors from './auction-selectors';
import BusinessFunctionPathUpdater from '../offers/business-function-path-updater';

interface Props {
  children: ReactNode;
}

function GroupAuctionFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-2.5 md:mx-1">
        <ProductCategoriesNavbar types={['product']} />
      </div>
      <div className="flex flex-row justify-between pb-2">
        <BusinessFunctionPathUpdater />
        <AuctionSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default GroupAuctionFeedLayout;
