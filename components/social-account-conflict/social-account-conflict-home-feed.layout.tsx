'use client';

import { ReactNode } from 'react';
import { PostPreviewType } from '@/lib/post/post.types';
import HomeFeedLayout from '../home/home-feed.layout';
import SocialAccountConflictSelectors from './social-account-conflict-selectors';
import SocialAccountConflictHomeLink from './social-account-conflict-home-link';

interface Props {
  children: ReactNode;
  hideGroupProfileSidebarItems?: boolean;
  postPreviewType: PostPreviewType;
  showChannels: boolean;
  showCategories: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function SocialAccountConflictHomeFeedLayout({
  children,
  hideGroupProfileSidebarItems,
  postPreviewType,
  showChannels,
  showCategories,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType={postPreviewType}
      homeLink={<SocialAccountConflictHomeLink />}
      path={hideGroupProfileSidebarItems ? undefined : 'brand'}
      channels={undefined}
      selectors={
        showSelectors && (
          <>
            <div />
            <SocialAccountConflictSelectors />
          </>
        )
      }
      moreLink={undefined}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default SocialAccountConflictHomeFeedLayout;
