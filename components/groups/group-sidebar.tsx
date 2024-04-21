import { List, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupIcon from '@mui/icons-material/Group';
import SellIcon from '@mui/icons-material/Sell';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FlagIcon from '@mui/icons-material/Flag';
import { parseGroupMarketLink } from '@/lib/offer/parse-group-market-link';
import { parseGroupCommunityLink } from '@/lib/community/parse-group-community-link';
import SidebarItem from '../base/sidebar-item';

export default function GroupSidebar({ groupSlug }: { groupSlug: string }) {
  return (
    <div className="fixed top-14 left-0 h-screen text-gray-400 pt-6 px-2 bg-dark-600">
      <List>
        <SidebarItem href="/" icon={<HomeIcon fontSize="small" />} text="홈" />
        <ListItem className="text-base text-zinc-300 pl-4">그룹</ListItem>
        <ListItem className="text-base text-zinc-300 pl-4">장터</ListItem>
        <SidebarItem
          href={parseGroupMarketLink({ groupSlug, businessFunction: 'sell' })}
          icon={<SellIcon fontSize="small" />}
          text="판매"
        />
        <SidebarItem
          href={parseGroupMarketLink({ groupSlug, businessFunction: 'buy' })}
          icon={<ShoppingBagIcon fontSize="small" />}
          text="구매"
        />
        <SidebarItem
          href={parseGroupMarketLink({ groupSlug, businessFunction: 'swap' })}
          icon={<SwapHorizIcon fontSize="small" />}
          text="교환"
        />
        <ListItem className="text-base text-zinc-300 pl-4">커뮤니티</ListItem>
        <SidebarItem
          href={parseGroupCommunityLink({ groupSlug, communityType: 'member' })}
          icon={<GroupIcon fontSize="small" />}
          text="멤버"
        />
        <SidebarItem
          href={parseGroupCommunityLink({
            groupSlug,
            communityType: 'user-review',
          })}
          icon={<StickyNote2Icon fontSize="small" />}
          text="거래 후기"
        />
        <SidebarItem
          href={parseGroupCommunityLink({ groupSlug, communityType: 'report' })}
          icon={<FlagIcon fontSize="small" />}
          text="신고"
        />
      </List>
    </div>
  );
}
