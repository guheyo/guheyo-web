'use client';

import { usePathname } from 'next/navigation';
import { COMMUNITY_CHANNEL_OPTIONS } from '@/lib/community/community.constants';
import TextNavbar from '../base/text-navbar';

export default function CommunityChannelNavbar() {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={COMMUNITY_CHANNEL_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
