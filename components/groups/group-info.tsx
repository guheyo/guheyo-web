'use client';

import { useFindGroupQuery } from '@/generated/graphql';
import { groupVar } from '@/lib/apollo/cache';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

export default function GroupInfo({ slug }: { slug: string }) {
  const { loading, data } = useFindGroupQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <div>Loading</div>;
  if (!data?.findGroup) return <div>null</div>;

  const group = data?.findGroup;
  groupVar(group);

  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        src={!group.icon ? '/star/star.svg' : group.icon}
        width={isMobile ? 48 : 56}
        height={isMobile ? 48 : 56}
        alt={`${group.name} logo`}
        className="rounded-lg"
      />
      <div className="text-star-500 text-base md:text-lg font-bold">{`g/${group.name}`}</div>
    </div>
  );
}
