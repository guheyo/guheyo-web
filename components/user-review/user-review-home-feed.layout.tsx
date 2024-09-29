'use client';

import { ReactNode } from 'react';
import UserReviewHomeLink from '@/lib/user-review/user-review-home-link';
import { USER_REVIEW_CHANNEL_OPTIONS } from '@/lib/user-review/user-review.constants';
import HomeFeedLayout from '../home/home-feed.layout';
import MannerTagsNavbar from './manner-tags-navbar';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import CommunityMoreLink from '../community/community-more-link';
import ChannelNavbar from '../channel/channel-navbar';
import UserReviewSelectors from './user-review-selectors';

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
      homeLink={<UserReviewHomeLink />}
      path={hideGroupProfileSidebarItems ? undefined : 'review'}
      channels={
        showChannels ? (
          <ChannelNavbar options={USER_REVIEW_CHANNEL_OPTIONS} />
        ) : undefined
      }
      tags={showTags ? <MannerTagsNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <UserReviewSelectors />
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
