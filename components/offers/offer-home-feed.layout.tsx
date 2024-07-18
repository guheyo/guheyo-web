'use client';

import { ReactNode } from 'react';
import { BusinessFunction } from '@/lib/offer/offer.types';
import BusinessFunctionPathUpdater from './business-function-path-updater';
import OfferSelectors from '../selectors/offer-selectors';
import SellHomeLink from './sell-home-link';
import SwapHomeLink from './swap-home-link';
import BuyHomeLink from './buy-home-link';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';

interface Props {
  children: ReactNode;
  businessFunction: BusinessFunction;
}

function OfferHomeFeedLayout({ children, businessFunction }: Props) {
  return (
    <HomeFeedLayout
      homeLink={
        businessFunction === 'sell' ? (
          <SellHomeLink businessFunction={businessFunction} />
        ) : businessFunction === 'buy' ? (
          <BuyHomeLink businessFunction={businessFunction} />
        ) : (
          businessFunction === 'swap' && (
            <SwapHomeLink businessFunction={businessFunction} />
          )
        )
      }
      path={businessFunction}
      categories={<ProductCategoriesNavbar types={['product', 'service']} />}
      selectors={
        <>
          <BusinessFunctionPathUpdater />
          <OfferSelectors />
        </>
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default OfferHomeFeedLayout;
