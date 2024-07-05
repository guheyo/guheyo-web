'use client';

import { ReactNode, Suspense } from 'react';
import { BusinessFunction } from '@/lib/offer/offer.types';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';
import BusinessFunctionPathUpdater from './business-function-path-updater';
import OfferSelectors from '../selectors/offer-selectors';
import SellHomeLink from './sell-home-link';
import SwapHomeLink from './swap-home-link';
import BuyHomeLink from './buy-home-link';

interface Props {
  children: ReactNode;
  showSelector: boolean;
  businessFunction: BusinessFunction;
}

function HomeOfferFeedLayout({
  children,
  showSelector,
  businessFunction,
}: Props) {
  return (
    <div>
      <div className="pt-0 pb-2 px-3 md:px-1 w-fit">
        {businessFunction === 'sell' && (
          <SellHomeLink businessFunction={businessFunction} />
        )}
        {businessFunction === 'buy' && (
          <BuyHomeLink businessFunction={businessFunction} />
        )}
        {businessFunction === 'swap' && (
          <SwapHomeLink businessFunction={businessFunction} />
        )}
      </div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/${businessFunction}`}
        />
      </div>
      {showSelector && (
        <div className="flex justify-between pb-2">
          <Suspense>
            <BusinessFunctionPathUpdater />
            <OfferSelectors />
          </Suspense>
        </div>
      )}
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default HomeOfferFeedLayout;
