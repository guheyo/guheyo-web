'use client';

import { ReactNode } from 'react';
import CategoriesNavbar from '../categories/categories-navbar';
import AuctionSelectors from './auction-selectors';

interface Props {
  children: ReactNode;
}

function AuctionFeedHomeLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-2.5 md:mx-1">
        <CategoriesNavbar hideSelector />
      </div>
      <div className="flex justify-end pb-2">
        <AuctionSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default AuctionFeedHomeLayout;
