'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import CommunityHomeLink from '../community/community-home-link';
import CommunityChannelNavbar from '../community/community-channel-navbar';
import CommunityCategoriesNavbar from '../community/community-categories-navbar';
import CommunityTagsNavbar from '../community/community-tags-navbar';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
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

function TopicHomeFeedLayout({
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
      homeLink={<CommunityHomeLink communityChannelType="topic" />}
      path={hideGroupProfileSidebarItems ? undefined : 'topic'}
      channels={showChannels ? <CommunityChannelNavbar /> : undefined}
      categories={showCategories ? <CommunityCategoriesNavbar /> : undefined}
      tags={showTags ? <CommunityTagsNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <CommunitySelectors />
          </>
        )
      }
      moreLink={
        showMoreLink && <CommunityMoreLink communityChannelType="topic" />
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default TopicHomeFeedLayout;
