'use client';

import { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import CommunityHomeLink from './community-home-link';
import CommunityCategoriesNavbar from '../thread/community-categories-navbar';
import HomeFeedLayout from '../home/home-feed.layout';
import MannerTagsNavbar from '../user-review/manner-tags-navbar';

interface Props {
  children: ReactNode;
}

function CommunityHomeFeedLayout({ children }: Props) {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  return (
    <HomeFeedLayout
      homeLink={<CommunityHomeLink />}
      path="community"
      categories={<CommunityCategoriesNavbar />}
      tags={categorySlug === 'review' ? <MannerTagsNavbar /> : undefined}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default CommunityHomeFeedLayout;
