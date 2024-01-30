'use client';

import HomeFooter from '@/components/footers/home-footer';
import GroupFeed from '@/components/groups/group-feed';

function Page() {
  return (
    <>
      <div className="mt-0 md:mt-2 mb-36">
        <GroupFeed />
      </div>
      <HomeFooter />
    </>
  );
}

export default Page;
