'use client';

import { ReactNode } from 'react';
import AuctionSelectors from './auction-selectors';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import AuctionMoreLink from './auction-more-link';
import BusinessFunctionNavbar from '../offers/business-function-navbar';
import AuctionHomeLink from './auction-home-link';
import FollowFilterClickButton from '../follow/follow-filter-click-button';

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
      homeLink={<AuctionHomeLink />}
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
