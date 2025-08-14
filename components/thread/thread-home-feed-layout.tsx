'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import ThreadHomeLink from './thread-home-link';
import ThreadSelectors from './thread-selectors';
import ThreadMoreLink from './thread-more-link';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbar?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function ThreadHomeFeedLayout({
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
      homeLink={<ThreadHomeLink />}
      path={hideGroupProfileNavbar ? undefined : 'thread'}
      categories={undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <ThreadSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <ThreadMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default ThreadHomeFeedLayout;
