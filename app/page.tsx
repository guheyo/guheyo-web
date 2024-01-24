'use client';

import HomeFooter from '@/components/footers/home-footer';
import GuildFeed from '@/components/guilds/guild-feed';

function Page() {
  return (
    <>
      <div className="mt-0 md:mt-2 mb-36">
        <GuildFeed />
      </div>
      <HomeFooter />
    </>
  );
}

export default Page;
