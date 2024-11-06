'use client';

import { ReactNode } from 'react';
import AuctionSelectors from './auction-selectors';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import AuctionMoreLink from './auction-more-link';
import AuctionHomeLink from './auction-home-link';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import MarketChannelNavbar from '../market/market-channel-navbar';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbarItems?: boolean;
  showChannels: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function AuctionHomeFeedLayout({
  children,
  hideGroupProfileNavbarItems,
  showChannels,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="thumbnail"
      homeLink={<AuctionHomeLink />}
      path={hideGroupProfileNavbarItems ? undefined : 'auction'}
      channels={showChannels ? <MarketChannelNavbar /> : undefined}
      categories={
        showCategories ? (
          <ProductCategoriesNavbar types={['product']} />
        ) : undefined
      }
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
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
