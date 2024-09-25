'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import BrandMoreLink from './brand-more-link';
import BrandHomeLink from './brand-home-link';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import BrandSelectors from './brand-selectors';
import BrandTabNavbar from './brand-tab-navbar';
import CommunityChannelNavbar from '../community/community-channel-navbar';

interface Props {
  children: ReactNode;
  showChannels: boolean;
  showTabs: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function BrandHomeFeedLayout({
  children,
  showChannels,
  showTabs,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="thumbnail"
      homeLink={<BrandHomeLink />}
      path="brand"
      channels={showChannels ? <CommunityChannelNavbar /> : undefined}
      tabs={showTabs ? <BrandTabNavbar /> : undefined}
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
