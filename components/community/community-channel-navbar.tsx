'use client';

import { COMMUNITY_CHANNEL_OPTIONS } from '@/lib/community/community.constants';
import { useGroup } from '@/hooks/use-group';
import { usePathname } from 'next/navigation';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import TextNavbar from '../base/text-navbar';

export default function CommunityChannelNavbar() {
  const pathname = usePathname();
  const { group } = useGroup();
  const selectedValue = group
    ? pathname.split('/').at(3)
    : pathname.split('/').at(1);

  return (
    <TextNavbar
      options={COMMUNITY_CHANNEL_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) =>
        parseChannelLink({ channelName: value, groupSlug: group?.slug })
      }
      size="medium"
    />
  );
}
