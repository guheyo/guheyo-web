import GroupAuctionFeedLayout from '@/components/auction/group-auction-feed.layout';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <GroupAuctionFeedLayout>{children}</GroupAuctionFeedLayout>;
}

export default Layout;
