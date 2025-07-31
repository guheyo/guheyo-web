import AuctionHome from '@/components/auction/auction-home';
import BrandOverview from '@/components/brand/brand-overview';
import CommunityHome from '@/components/community/community-home';
import HomeFooter from '@/components/footers/home-footer';
import GbHome from '@/components/gb/gb-home';
import GroupFeed from '@/components/groups/group-feed';
import OfferHome from '@/components/offers/offer-home';
import { Suspense } from 'react';

export const metadata = {
  title: '구해요',
  description: '디스코드 거래 장터, 구해요',
};

function Page() {
  return (
    <Suspense>
      <div className="min-h-screen mb-12 flex flex-col gap-0 md:gap-8">
        <AuctionHome />
        <OfferHome businessFunction="sell" />
        <OfferHome businessFunction="buy" />
        <OfferHome businessFunction="swap" />
        <GbHome />
        <CommunityHome />
        <BrandOverview />
        <div className="px-2 md:px-0 pt-4">
          <GroupFeed />
        </div>
      </div>
      <HomeFooter />
    </Suspense>
  );
}

export default Page;
