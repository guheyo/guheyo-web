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
import OfferMoreLink from './offer-more-link';

interface Props {
  children: ReactNode;
  businessFunction: BusinessFunction;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function OfferHomeFeedLayout({
  children,
  businessFunction,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType={businessFunction === 'buy' ? 'text' : 'thumbnail'}
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
      categories={
        showCategories ? (
          <ProductCategoriesNavbar types={['product', 'service']} />
        ) : undefined
      }
      selectors={
        showSelectors && (
          <>
            <BusinessFunctionPathUpdater />
            <OfferSelectors />
          </>
        )
      }
      moreLink={
        showMoreLink && <OfferMoreLink businessFunction={businessFunction} />
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default OfferHomeFeedLayout;
