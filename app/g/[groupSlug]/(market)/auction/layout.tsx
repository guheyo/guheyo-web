import AuctionHomeFeedLayout from '@/components/auction/auction-home-feed.layout';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <AuctionHomeFeedLayout showCategories showSelectors>
      {children}
    </AuctionHomeFeedLayout>
  );
}

export default Layout;
