'use client';

import { ReactNode } from 'react';
import GavelIcon from '@mui/icons-material/Gavel';
import AuctionSelectors from './auction-selectors';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';

interface Props {
  children: ReactNode;
}

function HomeAuctionFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-2.5 md:mx-1">
        <div className="flex flex-row gap-4 text-gray-200 text-base md:text-lg font-semibold pt-4 pb-2">
          <GavelIcon />
          <div>경매장</div>
        </div>
      </div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-2 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/auction`}
        />
      </div>
      <div className="flex justify-end pb-2">
        <AuctionSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default HomeAuctionFeedLayout;
