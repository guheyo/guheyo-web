'use client';

import { ReactNode } from 'react';
import OfferSelectors from '../selectors/offer-selectors';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import BusinessFunctionPathUpdater from './business-function-path-updater';

interface Props {
  children: ReactNode;
}

function OfferFeedHomeLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-2.5 md:mx-1">
        <ProductCategoriesNavbar types={['product', 'service']} />
      </div>
      <div className="flex flex-row justify-between pb-2">
        <BusinessFunctionPathUpdater />
        <OfferSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default OfferFeedHomeLayout;
