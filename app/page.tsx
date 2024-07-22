import AuctionHome from '@/components/auction/auction-home';
import CommunityHome from '@/components/community/community-home';
import HomeFooter from '@/components/footers/home-footer';
import GroupFeed from '@/components/groups/group-feed';
import OfferHome from '@/components/offers/offer-home';

export const metadata = {
  title: '구해요',
  description: '디스코드 거래 장터, 구해요',
};

function Page() {
  return (
    <>
      <div className="min-h-screen mb-12 flex flex-col gap-4 md:gap-12">
        <AuctionHome />
        <OfferHome businessFunction="sell" />
        <OfferHome businessFunction="buy" />
        <OfferHome businessFunction="swap" />
        <CommunityHome />
        <div className="px-2 md:px-0 pt-0 md:pt-0">
          <GroupFeed />
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default Page;
