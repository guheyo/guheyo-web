'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import InfoHomeLink from './info-home-link';
import InfoMoreLink from './info-more-link';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbar?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function InfoHomeFeedLayout({
  children,
  hideGroupProfileNavbar,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<InfoHomeLink />}
      path={hideGroupProfileNavbar ? undefined : 'info'}
      categories={undefined}
      selectors={showSelectors && <FollowFilterClickButton />}
      moreLink={showMoreLink && <InfoMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default InfoHomeFeedLayout;
