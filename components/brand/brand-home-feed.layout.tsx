'use client';

import { ReactNode } from 'react';
import { PostPreviewType } from '@/lib/post/post.types';
import HomeFeedLayout from '../home/home-feed.layout';
import BrandMoreLink from './brand-more-link';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import BrandSelectors from './brand-selectors';
import BrandHomeLink from './brand-home-link';

interface Props {
  children: ReactNode;
  postPreviewType: PostPreviewType;
  showChannels: boolean;
  showTabs: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function BrandHomeFeedLayout({
  children,
  postPreviewType,
  showChannels,
  showTabs,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType={postPreviewType}
      homeLink={<BrandHomeLink />}
      path="brand"
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <BrandSelectors />
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
