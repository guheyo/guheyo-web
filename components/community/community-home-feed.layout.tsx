'use client';

import { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import CommunityHomeLink from './community-home-link';
import CommunityCategoriesNavbar from './community-categories-navbar';
import HomeFeedLayout from '../home/home-feed.layout';
import MannerTagsNavbar from '../user-review/manner-tags-navbar';
import CommunityTagsNavbar from './community-tags-navbar';
import CommunityMoreLink from './community-more-link';
import CommunitySelectors from './community-selectors';

interface Props {
  children: ReactNode;
  hideGroupProfileSidebarItems?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function CommunityHomeFeedLayout({
  children,
  hideGroupProfileSidebarItems,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<CommunityHomeLink />}
      path={hideGroupProfileSidebarItems ? undefined : 'community'}
      categories={showCategories ? <CommunityCategoriesNavbar /> : undefined}
      tags={
        showTags ? (
          categorySlug === 'review' ? (
            <MannerTagsNavbar />
          ) : (
            <CommunityTagsNavbar categorySlug={categorySlug || ''} />
          )
        ) : undefined
      }
      selectors={
        showSelectors && (
          <>
            <div />
            <CommunitySelectors />
          </>
        )
      }
      moreLink={showMoreLink && <CommunityMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default CommunityHomeFeedLayout;
