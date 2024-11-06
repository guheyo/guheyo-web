'use client';

import { ReactNode } from 'react';
import { BusinessFunction } from '@/lib/offer/offer.types';
import OfferSelectors from '../selectors/offer-selectors';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferMoreLink from './offer-more-link';
import SellHomeLink from './sell-home-link';
import BuyHomeLink from './buy-home-link';
import SwapHomeLink from './swap-home-link';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import MarketChannelNavbar from '../market/market-channel-navbar';

interface Props {
  children: ReactNode;
  businessFunction: BusinessFunction;
  hideGroupProfileNavbar?: boolean;
  showChannels: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function OfferHomeFeedLayout({
  children,
  businessFunction,
  hideGroupProfileNavbar,
  showChannels,
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
      path={hideGroupProfileNavbar ? undefined : businessFunction}
      channels={showChannels ? <MarketChannelNavbar /> : undefined}
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
