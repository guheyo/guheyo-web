'use client';

import { ReactNode } from 'react';
import AuctionSelectors from './auction-selectors';
import BusinessFunctionPathUpdater from '../offers/business-function-path-updater';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import AuctionMoreLink from './auction-more-link';
import MarketHomeLink from '../market/market-home-link';
import BusinessFunctionNavbar from '../offers/business-function-navbar';
import AuctionHomeLink from './auction-home-link';

interface Props {
  children: ReactNode;
  showChannels: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function AuctionHomeFeedLayout({
  children,
  showChannels,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="thumbnail"
      homeLink={
        showChannels ? (
          <MarketHomeLink businessFunction="auction" />
        ) : (
          <AuctionHomeLink />
        )
      }
      path="auction"
      channels={showChannels ? <BusinessFunctionNavbar /> : undefined}
      categories={
        showCategories ? (
          <ProductCategoriesNavbar types={['product']} />
        ) : undefined
      }
      selectors={
        showSelectors && (
          <>
            <BusinessFunctionPathUpdater />
            <AuctionSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <AuctionMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default AuctionHomeFeedLayout;
