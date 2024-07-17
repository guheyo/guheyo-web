'use client';

import { List, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ForumIcon from '@mui/icons-material/Forum';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FlagIcon from '@mui/icons-material/Flag';
import { parseCommunityLink } from '@/lib/community/parse-community-link';
import { useGroup } from '@/hooks/use-group';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { parseAuctionLink } from '@/lib/auction/parse-auction-link';
import { MARKET_CHANNELS } from '@/lib/market/market.constants';
import { parseMemberFeedtLink } from '@/lib/user/parse-member-feed-link';
import { parseReportFeedtLink } from '@/lib/report/parse-report-feed-link';
import { parseGbFeedtLink } from '@/lib/gb/parse-gb-feed-link';
import SidebarItem from '../base/sidebar-item';
import GroupProfileSidebarItems from './group-profile-sidebar-items';
import BackDrop from '../base/back-drop';

export default function GroupSidebar({
  isMenuOpen,
  handleMenuToggle,
}: {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}) {
  const { loading, group } = useGroup();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const pathSegments = pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    setActiveItem(lastSegment);
  }, [pathname]);

  useEffect(() => {
    // break point: lg
    if (isMenuOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleBackdropClick: MouseEventHandler = (event) => {
    // Prevent propagation of click event to background component
    event.stopPropagation();
    event.preventDefault();
    handleMenuToggle();
  };

  if (loading) {
    return <div />;
  }

  return (
    <>
      {isMenuOpen && (
        <div className="lg:hidden">
          <BackDrop
            opacity={0.5}
            handleBackdropClick={handleBackdropClick}
            handleToggle={handleMenuToggle}
          />
        </div>
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 lg:top-14 left-0 h-screen w-72 lg:w-64 bg-dark-600 text-gray-400 pt-4 px-4 z-50 ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <List>
          <SidebarItem
            href="/"
            icon={<HomeIcon fontSize="medium" />}
            text="홈"
            isActive={activeItem === ''}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
            그룹
          </ListItem>
          <GroupProfileSidebarItems
            currentGroupId={group?.id}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
            pathFormatter={(slug) => `/g/${slug}`}
          />
          <div className="pt-4 md:pt-6" />
          <SidebarItem
            href={parseAuctionLink({
              groupSlug: group?.slug,
            })}
            icon={<StorefrontIcon fontSize="medium" />}
            text="장터"
            isActive={MARKET_CHANNELS.includes(activeItem)}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseGbFeedtLink({
              groupSlug: group?.slug,
            })}
            icon={<WhatshotIcon fontSize="medium" />}
            text="공동구매"
            isActive={activeItem === 'gb'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseCommunityLink({
              groupSlug: group?.slug,
            })}
            icon={<ForumIcon fontSize="medium" />}
            text="커뮤니티"
            isActive={activeItem === 'community'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseMemberFeedtLink({
              groupSlug: group?.slug,
            })}
            icon={<GroupIcon fontSize="medium" />}
            text="멤버"
            isActive={activeItem === 'member'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseReportFeedtLink({
              groupSlug: group?.slug,
            })}
            icon={<FlagIcon fontSize="medium" />}
            text="신고"
            isActive={activeItem === 'report'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
        </List>
      </div>
    </>
  );
}
