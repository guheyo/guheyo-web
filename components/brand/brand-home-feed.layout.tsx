'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import BrandMoreLink from './brand-more-link';
import BrandHomeLink from './brand-home-link';

interface Props {
  children: ReactNode;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function BrandHomeFeedLayout({
  children,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="thumbnail"
      homeLink={<BrandHomeLink />}
      path="brand"
      categories={
        showCategories ? (
          <ProductCategoriesNavbar types={['product']} />
        ) : undefined
      }
      selectors={
        showSelectors && (
          <>
            <div />
            <div />
          </>
        )
      }
      moreLink={showMoreLink && <BrandMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default BrandHomeFeedLayout;
