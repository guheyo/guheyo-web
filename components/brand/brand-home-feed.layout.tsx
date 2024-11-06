'use client';

import { ReactNode } from 'react';
import { PostPreviewType } from '@/lib/post/post.types';
import HomeFeedLayout from '../home/home-feed.layout';
import BrandMoreLink from './brand-more-link';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import BrandSelectors from './brand-selectors';
import BrandHomeLink from './brand-home-link';
import BrandChannelNavbar from './brand-channel-navbar';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbar?: boolean;
  postPreviewType: PostPreviewType;
  showChannels: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function BrandHomeFeedLayout({
  children,
  hideGroupProfileNavbar,
  postPreviewType,
  showChannels,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType={postPreviewType}
      homeLink={<BrandHomeLink />}
      path={hideGroupProfileNavbar ? undefined : 'brand'}
      channels={showChannels && <BrandChannelNavbar />}
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
