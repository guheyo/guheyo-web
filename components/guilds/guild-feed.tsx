'use client';

import { useFindGuildPreviewsQuery } from '@/generated/graphql';
import GuildPreview from './guild-preview';

export default function GuildFeed() {
  const { loading, data } = useFindGuildPreviewsQuery();
  if (loading) return <div>Loading</div>;
  if (!data?.findGuildPreviews) return <div>null</div>;
  const guilds = data.findGuildPreviews;

  return (
    <div className="grid grid-rows gap-4 md:gap-12">
      {guilds.map((guild) => (
        <GuildPreview guild={guild} key={guild.slug} />
      ))}
    </div>
  );
}
