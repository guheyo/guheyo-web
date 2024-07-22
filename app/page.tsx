import AuctionHome from '@/components/auction/auction-home';
import CommunityHome from '@/components/community/community-home';
import HomeFooter from '@/components/footers/home-footer';
import GroupFeed from '@/components/groups/group-feed';

export const metadata = {
  title: '구해요',
  description: '디스코드 거래 장터, 구해요',
};

function Page() {
  return (
    <>
      <div className="min-h-screen mb-12 flex flex-col gap-12">
        <AuctionHome />
        <CommunityHome />
        <div className="px-2 md:px-0">
          <GroupFeed />
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default Page;
