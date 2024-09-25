'use client';

import { ReactNode } from 'react';
import { CommunityChannelType } from '@/lib/community/community.types';
import HomeFeedLayout from '../home/home-feed.layout';
import MannerTagsNavbar from './manner-tags-navbar';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import CommunityHomeLink from '../community/community-home-link';
import CommunityChannelNavbar from '../community/community-channel-navbar';
import CommunitySelectors from '../community/community-selectors';
import CommunityMoreLink from '../community/community-more-link';

interface Props {
  children: ReactNode;
  hideGroupProfileSidebarItems?: boolean;
  showChannels: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function UserReviewHomeFeedLayout({
  children,
  hideGroupProfileSidebarItems,
  showChannels,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<CommunityHomeLink communityChannelType="review" />}
      path={hideGroupProfileSidebarItems ? undefined : 'review'}
      channels={showChannels ? <CommunityChannelNavbar /> : undefined}
      tags={showTags ? <MannerTagsNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
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

export default UserReviewHomeFeedLayout;
