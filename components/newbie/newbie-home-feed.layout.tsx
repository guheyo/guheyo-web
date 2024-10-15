'use client';

import MemberHomeLink from '@/components/member/member-home-link';
import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import NewbieSelectors from './newbie-selectors';

interface Props {
  children: ReactNode;
  showCategories: boolean;
  showSelectors: boolean;
}

function NewbieHomeFeedLayout({
  children,
  showCategories,
  showSelectors,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<MemberHomeLink />}
      path="member"
      categories={undefined}
      selectors={
        showSelectors && (
          <>
            <div />
            <NewbieSelectors />
          </>
        )
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default NewbieHomeFeedLayout;
