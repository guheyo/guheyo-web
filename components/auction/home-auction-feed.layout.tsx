'use client';

import { ReactNode, Suspense } from 'react';
import AuctionHomeLink from './auction-home-link';
import AuctionSelectors from './auction-selectors';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';
import BusinessFunctionPathUpdater from '../offers/business-function-path-updater';

interface Props {
  children: ReactNode;
  showSelector: boolean;
}

function HomeAuctionFeedLayout({ children, showSelector }: Props) {
  return (
    <div>
      <div className="pt-0 pb-2 px-3 md:px-1 w-fit">
        <AuctionHomeLink />
      </div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/auction`}
        />
      </div>
      {showSelector && (
        <div className="flex justify-between pb-2">
          <Suspense>
            <BusinessFunctionPathUpdater />
            <AuctionSelectors />
          </Suspense>
        </div>
      )}
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default HomeAuctionFeedLayout;
