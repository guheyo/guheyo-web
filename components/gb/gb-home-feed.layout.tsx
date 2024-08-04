'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import GbHomeLink from './gb-home-link';
import GbMoreLink from './gb-more-link';
import GbCategoriesNavbar from './gb-categories-navbar';

interface Props {
  children: ReactNode;
  hideGroupProfileSidebarItems?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showMoreLink: boolean;
}

function GbHomeFeedLayout({
  children,
  hideGroupProfileSidebarItems,
  showCategories,
  showTags,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<GbHomeLink />}
      path={hideGroupProfileSidebarItems ? undefined : 'community'}
      categories={showCategories ? <GbCategoriesNavbar /> : undefined}
      moreLink={showMoreLink && <GbMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default GbHomeFeedLayout;
