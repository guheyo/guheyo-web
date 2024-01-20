'use client';

import { useFindGuildQuery } from '@/generated/graphql';
import { guildVar } from '@/lib/apollo/cache';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

export default function GuildInfo({ slug }: { slug: string }) {
  const { loading, error, data } = useFindGuildQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findGuild) return <div>null</div>;

  const guild = data?.findGuild;
  guildVar(guild);

  return (
    <div className="flex flex-row items-center gap-4 mx-2 md:mx-0">
      <Image
        src={guild.icon!}
        width={isMobile ? 48 : 56}
        height={isMobile ? 48 : 56}
        alt={`${guild.name} logo`}
        className="rounded-lg"
      />
      <div className="text-star-500 text-lg md:text-xl font-bold ">{`g/${guild.description}`}</div>
    </div>
  );
}
