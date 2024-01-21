'use client';

import GuildInfo from '@/components/guilds/guild-info';

export default function GuildLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    guildSlug: string;
  };
}) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="pt-4 pb-2 px-2 md:px-0">
        <GuildInfo slug={params.guildSlug} />
      </div>
      {children}
    </div>
  );
}
