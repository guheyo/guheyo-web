import HomeOfferFeedLayout from '@/components/offers/home-offer-feed.layout';
import { ReactNode } from 'react';

export async function generateMetadata() {
  return {
    title: `구매 | 구해요`,
    Description: `장터에서 멤버들과 거래해요`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-2 md:mx-0">
      <HomeOfferFeedLayout showSelector businessFunction="buy">
        {children}
      </HomeOfferFeedLayout>
    </div>
  );
}

export default Layout;
