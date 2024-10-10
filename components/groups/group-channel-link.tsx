'use client';

import { convertAvatarSize } from '@/lib/avatar/convert-avatar-size';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import { FontSize } from '@/lib/font/font.types';
import Image from 'next/image';
import Link from 'next/link';

export default function GroupChannelLink({
  name,
  groupSlug,
  channelSlug,
  icon,
  fontSize,
}: {
  name: string;
  groupSlug: string;
  channelSlug: string;
  icon?: string;
  fontSize: FontSize;
}) {
  return (
    <Link href={parseChannelLink({ groupSlug, channelSlug })}>
      <div
        className={`flex gap-2 md:gap-3 items-center font-medium ${fontSize}`}
      >
        <Image
          src={!icon ? '/guheyo/guheyo-logo.svg' : icon}
          width={convertAvatarSize(fontSize)}
          height={convertAvatarSize(fontSize)}
          alt={`${name} logo`}
          className="rounded-full"
        />
        <div className="text-gray-200">{name}</div>
      </div>
    </Link>
  );
}
