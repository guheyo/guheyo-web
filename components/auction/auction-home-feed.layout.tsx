'use client';

import { ReactNode } from 'react';
import AuctionHomeLink from './auction-home-link';
import AuctionSelectors from './auction-selectors';
import BusinessFunctionPathUpdater from '../offers/business-function-path-updater';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';

interface Props {
  children: ReactNode;
  showCategories: boolean;
  showSelector: boolean;
}

function AuctionHomeFeedLayout({
  children,
  showCategories,
  showSelector,
}: Props) {
  return (
    <HomeFeedLayout
      homeLink={<AuctionHomeLink />}
      path="auction"
      categories={
        showCategories ? (
          <ProductCategoriesNavbar types={['product']} />
        ) : undefined
      }
      selectors={
        showSelector && (
          <>
            <BusinessFunctionPathUpdater />
            <AuctionSelectors />
          </>
        )
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default AuctionHomeFeedLayout;
