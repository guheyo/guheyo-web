'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import GbHomeLink from './gb-home-link';
import GbMoreLink from './gb-more-link';
import GbCategoriesNavbar from './gb-categories-navbar';
import GbSelectors from './gb-selectors';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import MarketChannelNavbar from '../market/market-channel-navbar';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbar?: boolean;
  showChannels: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function GbHomeFeedLayout({
  children,
  hideGroupProfileNavbar,
  showChannels,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<GbHomeLink />}
      path={hideGroupProfileNavbar ? undefined : 'gb'}
      channels={showChannels ? <MarketChannelNavbar /> : undefined}
      categories={showCategories ? <GbCategoriesNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <GbSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <GbMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default GbHomeFeedLayout;
