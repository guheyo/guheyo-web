import { List, ListItem, ListItemIcon, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupIcon from '@mui/icons-material/Group';
import SellIcon from '@mui/icons-material/Sell';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FlagIcon from '@mui/icons-material/Flag';
import Link from 'next/link';
import { parseGroupMarketLink } from '@/lib/offer/parse-group-market-link';
import { parseGroupCommunityLink } from '@/lib/community/parse-group-community-link';

export default function GroupSidebar({ groupSlug }: { groupSlug: string }) {
  return (
    <div className="fixed top-14 left-0 h-screen text-gray-400 pt-6 px-2 bg-dark-600">
      <List>
        <Link href="/">
          <ListItem>
            <ListItemIcon
              className="text-gray-400"
              style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
            >
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <Typography className="text-base">홈</Typography>
          </ListItem>
        </Link>
        <ListItem className="text-base text-zinc-300 pl-4">그룹</ListItem>
        <ListItem className="text-base text-zinc-300 pl-4">장터</ListItem>
        <Link
          href={parseGroupMarketLink({ groupSlug, businessFunction: 'sell' })}
        >
          <ListItem>
            <ListItemIcon
              className="text-gray-400"
              style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
            >
              <SellIcon fontSize="small" />
            </ListItemIcon>
            <Typography className="text-base">판매</Typography>
          </ListItem>
        </Link>
        <Link
          href={parseGroupMarketLink({ groupSlug, businessFunction: 'buy' })}
        >
          <ListItem>
            <ListItemIcon
              className="text-gray-400"
              style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
            >
              <ShoppingBagIcon fontSize="small" />
            </ListItemIcon>
            <Typography className="text-base">구매</Typography>
          </ListItem>
        </Link>
        <Link
          href={parseGroupMarketLink({ groupSlug, businessFunction: 'swap' })}
        >
          <ListItem>
            <ListItemIcon
              className="text-gray-400"
              style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
            >
              <SwapHorizIcon fontSize="small" />
            </ListItemIcon>
            <Typography className="text-base">교환</Typography>
          </ListItem>
        </Link>
        <ListItem className="text-base text-zinc-300 pl-4">커뮤니티</ListItem>
        <Link
          href={parseGroupCommunityLink({ groupSlug, communityType: 'member' })}
        >
          <ListItem>
            <ListItemIcon
              className="text-gray-400"
              style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
            >
              <GroupIcon fontSize="small" />
            </ListItemIcon>
            <Typography className="text-base">멤버</Typography>
          </ListItem>
        </Link>
        <Link
          href={parseGroupCommunityLink({
            groupSlug,
            communityType: 'user-review',
          })}
        >
          <ListItem>
            <ListItemIcon
              className="text-gray-400"
              style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
            >
              <StickyNote2Icon fontSize="small" />
            </ListItemIcon>
            <Typography className="text-base">거래 후기</Typography>
          </ListItem>
        </Link>
        <Link
          href={parseGroupCommunityLink({
            groupSlug,
            communityType: 'report',
          })}
        >
          <ListItem>
            <ListItemIcon
              className="text-gray-400"
              style={{ minWidth: 'unset', width: 'auto', marginRight: '12px' }}
            >
              <FlagIcon fontSize="small" />
            </ListItemIcon>
            <Typography className="text-base">신고</Typography>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
