'use client';

import { ReactNode } from 'react';
import { BusinessFunction } from '@/lib/offer/offer.types';
import OfferSelectors from '../selectors/offer-selectors';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferMoreLink from './offer-more-link';
import MarketHomeLink from '../market/market-home-link';
import BusinessFunctionNavbar from './business-function-navbar';
import SellHomeLink from './sell-home-link';
import BuyHomeLink from './buy-home-link';
import SwapHomeLink from './swap-home-link';
import FollowFilterClickButton from '../follow/follow-filter-click-button';

interface Props {
  children: ReactNode;
  businessFunction: BusinessFunction;
  hideGroupProfileSidebarItems?: boolean;
  showChannels: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function OfferHomeFeedLayout({
  children,
  businessFunction,
  hideGroupProfileSidebarItems,
  showChannels,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType={businessFunction === 'buy' ? 'text' : 'thumbnail'}
      homeLink={
        showChannels ? (
          <MarketHomeLink businessFunction={businessFunction} />
        ) : businessFunction === 'sell' ? (
          <SellHomeLink businessFunction={businessFunction} />
        ) : businessFunction === 'buy' ? (
          <BuyHomeLink businessFunction={businessFunction} />
        ) : (
          businessFunction === 'swap' && (
            <SwapHomeLink businessFunction={businessFunction} />
          )
        )
      }
      path={hideGroupProfileSidebarItems ? undefined : businessFunction}
      channels={showChannels ? <BusinessFunctionNavbar /> : undefined}
      categories={
        showCategories ? (
          <ProductCategoriesNavbar types={['product', 'service']} />
        ) : undefined
      }
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
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
