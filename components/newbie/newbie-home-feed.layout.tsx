'use client';

import MemberHomeLink from '@/components/member/member-home-link';
import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import NewbieSelectors from './newbie-selectors';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbarItems?: boolean;
  showCategories: boolean;
  showSelectors: boolean;
}

function NewbieHomeFeedLayout({
  children,
  hideGroupProfileNavbarItems,
  showCategories,
  showSelectors,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<MemberHomeLink />}
      path={hideGroupProfileNavbarItems ? undefined : 'member'}
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
