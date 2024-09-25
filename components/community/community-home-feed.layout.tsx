'use client';

import { ReactNode } from 'react';
import { CommunityChannelType } from '@/lib/community/community.types';
import CommunityHomeLink from './community-home-link';
import CommunityCategoriesNavbar from './community-categories-navbar';
import HomeFeedLayout from '../home/home-feed.layout';
import MannerTagsNavbar from '../user-review/manner-tags-navbar';
import CommunityTagsNavbar from './community-tags-navbar';
import CommunityMoreLink from './community-more-link';
import CommunitySelectors from './community-selectors';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import CommunityChannelNavbar from './community-channel-navbar';
import BrandSelectors from '../brand/brand-selectors';
import BrandTabNavbar from '../brand/brand-tab-navbar';

interface Props {
  children: ReactNode;
  communityChannelType: CommunityChannelType;
  hideGroupProfileSidebarItems?: boolean;
  showChannels: boolean;
  showTabs: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function CommunityHomeFeedLayout({
  children,
  communityChannelType,
  hideGroupProfileSidebarItems,
  showChannels,
  showTabs,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  const renderTagsNavbar = () => {
    if (!showTags) return undefined;

    if (communityChannelType === 'topic') {
      return <CommunityTagsNavbar categorySlug={communityChannelType || ''} />;
    }

    if (communityChannelType === 'review') {
      return <MannerTagsNavbar />;
    }

    return undefined;
  };

  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={
        <CommunityHomeLink communityChannelType={communityChannelType} />
      }
      path={hideGroupProfileSidebarItems ? undefined : communityChannelType}
      tabs={showTabs ? <BrandTabNavbar /> : undefined}
      channels={showChannels ? <CommunityChannelNavbar /> : undefined}
      categories={showCategories ? <CommunityCategoriesNavbar /> : undefined}
      tags={renderTagsNavbar()}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            {communityChannelType === 'brand' ? (
              <BrandSelectors />
            ) : (
              <CommunitySelectors />
            )}
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
