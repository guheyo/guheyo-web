'use client';

import { ReactNode } from 'react';
import OfferSelectors from '../selectors/offer-selectors';
import CategoriesNavbar from '../categories/categories-navbar';

interface Props {
  children: ReactNode;
}

function OfferFeedHomeLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-2.5 md:mx-1">
        <CategoriesNavbar hideSelector />
      </div>
      <div className="flex justify-end pb-2">
        <OfferSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default OfferFeedHomeLayout;
