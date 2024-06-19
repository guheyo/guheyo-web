import HomeAuction from '@/components/auction/home-auction';
import HomeFooter from '@/components/footers/home-footer';
import GroupFeed from '@/components/groups/group-feed';

export const metadata = {
  title: '구해요',
  description: '디스코드 거래 장터, 구해요',
};

function Page() {
  return (
    <>
      <div className="min-h-screen mb-12 px-2 md:px-0 flex flex-col gap-12">
        <HomeAuction />
        <GroupFeed />
      </div>
      <HomeFooter />
    </>
  );
}

export default Page;
