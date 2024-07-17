'use client';

import { ReactNode } from 'react';
import AuctionHomeLink from './auction-home-link';
import AuctionSelectors from './auction-selectors';
import BusinessFunctionPathUpdater from '../offers/business-function-path-updater';
import HomeFeedLayout from '../home/home-feed.layout';

interface Props {
  children: ReactNode;
  showSelector: boolean;
}

function HomeAuctionFeedLayout({ children, showSelector }: Props) {
  return (
    <HomeFeedLayout
      homeLink={<AuctionHomeLink />}
      path="auction"
      selectors={
        showSelector && (
          <>
            <BusinessFunctionPathUpdater />
            <AuctionSelectors />
          </>
        )
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default HomeAuctionFeedLayout;
