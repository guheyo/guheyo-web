import HomeAuctionFeedLayout from '@/components/auction/home-auction-feed.layout';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <HomeAuctionFeedLayout>{children}</HomeAuctionFeedLayout>;
}

export default Layout;
