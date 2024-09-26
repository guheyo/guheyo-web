'use client';

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
      // NOTE: removed community channel options
      options={[]}
      selectedValue={selectedValue}
      parseNewURL={(value) =>
        parseChannelLink({ channelName: value, groupSlug: group?.slug })
      }
      size="medium"
    />
  );
}
