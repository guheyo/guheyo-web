'use client';

import MemberHomeLink from '@/components/member/member-home-link';
import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import NewbieSelectors from './newbie-selectors';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbar?: boolean;
  showCategories: boolean;
  showSelectors: boolean;
}

function NewbieHomeFeedLayout({
  children,
  hideGroupProfileNavbar,
  showCategories,
  showSelectors,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<MemberHomeLink />}
      path={hideGroupProfileNavbar ? undefined : 'member'}
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
