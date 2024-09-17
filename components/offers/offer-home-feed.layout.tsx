'use client';

import { ReactNode } from 'react';
import { BusinessFunction } from '@/lib/offer/offer.types';
import BusinessFunctionPathUpdater from './business-function-path-updater';
import OfferSelectors from '../selectors/offer-selectors';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferMoreLink from './offer-more-link';
import MarketHomeLink from '../market/market-home-link';

interface Props {
  children: ReactNode;
  businessFunction: BusinessFunction;
  hideGroupProfileSidebarItems?: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function OfferHomeFeedLayout({
  children,
  businessFunction,
  hideGroupProfileSidebarItems,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType={businessFunction === 'buy' ? 'text' : 'thumbnail'}
      homeLink={
        businessFunction === 'sell' ? (
          <MarketHomeLink businessFunction={businessFunction} />
        ) : businessFunction === 'buy' ? (
          <MarketHomeLink businessFunction={businessFunction} />
        ) : (
          businessFunction === 'swap' && (
            <MarketHomeLink businessFunction={businessFunction} />
          )
        )
      }
      path={hideGroupProfileSidebarItems ? undefined : businessFunction}
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
