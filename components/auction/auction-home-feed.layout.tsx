'use client';

import { ReactNode } from 'react';
import AuctionHomeLink from './auction-home-link';
import AuctionSelectors from './auction-selectors';
import BusinessFunctionPathUpdater from '../offers/business-function-path-updater';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import AuctionMoreLink from './auction-more-link';

interface Props {
  children: ReactNode;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function AuctionHomeFeedLayout({
  children,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="thumbnail"
      homeLink={<AuctionHomeLink />}
      path="auction"
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
