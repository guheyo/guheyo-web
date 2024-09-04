'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import GbHomeLink from './gb-home-link';
import GbMoreLink from './gb-more-link';
import GbCategoriesNavbar from './gb-categories-navbar';
import GbSelectors from './gb-selectors';

interface Props {
  children: ReactNode;
  hideGroupProfileSidebarItems?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function GbHomeFeedLayout({
  children,
  hideGroupProfileSidebarItems,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<GbHomeLink />}
      path={hideGroupProfileSidebarItems ? undefined : 'gb'}
      categories={showCategories ? <GbCategoriesNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <div />
            <GbSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <GbMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default GbHomeFeedLayout;
