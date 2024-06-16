'use client';

import { List, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FlagIcon from '@mui/icons-material/Flag';
import { parseGroupMarketLink } from '@/lib/offer/parse-group-market-link';
import { parseGroupCommunityLink } from '@/lib/community/parse-group-community-link';
import { useGroup } from '@/hooks/use-group';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
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

  if (loading || !group?.slug) {
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
          {/* Sidebar content */}
          <List>
            <SidebarItem
              href="/"
              icon={<HomeIcon fontSize="medium" />}
              text="홈"
              isActive={activeItem === ''}
              onClick={handleMenuToggle}
            />
            <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
              그룹
            </ListItem>
            <GroupProfileSidebarItems onClick={handleMenuToggle} />
          </List>
        </div>
      </>
    );
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
            onClick={handleMenuToggle}
          />
          <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
            그룹
          </ListItem>
          <GroupProfileSidebarItems
            currentGroupId={group.id}
            onClick={handleMenuToggle}
          />
          <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
            장터
          </ListItem>
          <SidebarItem
            href={parseGroupMarketLink({
              groupSlug: group?.slug,
              businessFunction: 'sell',
            })}
            icon={<SellIcon fontSize="medium" />}
            text="판매"
            isActive={activeItem === 'sell'}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseGroupMarketLink({
              groupSlug: group?.slug,
              businessFunction: 'buy',
            })}
            icon={<ShoppingBagIcon fontSize="medium" />}
            text="구매"
            isActive={activeItem === 'buy'}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseGroupMarketLink({
              groupSlug: group?.slug,
              businessFunction: 'swap',
            })}
            icon={<SwapHorizIcon fontSize="medium" />}
            text="교환"
            isActive={activeItem === 'swap'}
            onClick={handleMenuToggle}
          />
          <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
            커뮤니티
          </ListItem>
          <SidebarItem
            href={parseGroupCommunityLink({
              groupSlug: group?.slug,
              communityType: 'member',
            })}
            icon={<GroupIcon fontSize="medium" />}
            text="멤버"
            isActive={activeItem === 'member'}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseGroupCommunityLink({
              groupSlug: group?.slug,
              communityType: 'review',
            })}
            icon={<StickyNote2Icon fontSize="medium" />}
            text="거래 후기"
            isActive={activeItem === 'review'}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseGroupCommunityLink({
              groupSlug: group?.slug,
              communityType: 'report',
            })}
            icon={<FlagIcon fontSize="medium" />}
            text="신고"
            isActive={activeItem === 'report'}
            onClick={handleMenuToggle}
          />
        </List>
      </div>
    </>
  );
}
