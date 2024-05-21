import AuctionFeedHomeLayout from '@/components/auction/auction-feed-home.layout';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <AuctionFeedHomeLayout>{children}</AuctionFeedHomeLayout>;
}

export default Layout;
