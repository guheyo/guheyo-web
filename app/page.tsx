import HomeFooter from '@/components/footers/home-footer';
import GroupFeed from '@/components/groups/group-feed';

export const metadata = {
  title: '구해요',
  description: '디스코드 거래 장터, 구해요',
};

function Page() {
  return (
    <>
      <div className="mt-0 md:mt-2 min-h-screen mb-12">
        <GroupFeed />
      </div>
      <HomeFooter />
    </>
  );
}

export default Page;
