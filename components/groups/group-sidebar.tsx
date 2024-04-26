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
import { MouseEventHandler, useEffect, useRef } from 'react';
import SidebarItem from '../base/sidebar-item';
import GroupProfileSidebarItems from './group-profile-sidebar-items';

export default function GroupSidebar({
  isMenuOpen,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}) {
  const { loading, group } = useGroup();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const handleBackdropClick: MouseEventHandler = (event) => {
    // Prevent propagation of click event to background component
    event.stopPropagation();
    event.preventDefault();
    toggleMenu();
  };

  if (loading || !group?.slug) {
    return (
      <>
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-black opacity-50"
            onClick={handleBackdropClick}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                toggleMenu();
              }
            }}
            role="button" // Add role="button" to make it accessible for screen reader users
            aria-label="Toggle Menu"
            tabIndex={0} // Ensure element can receive keyboard focus
          />
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
              onClick={toggleMenu}
            />
            <ListItem className="text-base text-zinc-300 pl-4">그룹</ListItem>
            <GroupProfileSidebarItems onClick={toggleMenu} />
          </List>
        </div>
      </>
    );
  }

  return (
    <>
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black opacity-50"
          onClick={handleBackdropClick}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              toggleMenu();
            }
          }}
          role="button" // Add role="button" to make it accessible for screen reader users
          aria-label="Toggle Menu"
          tabIndex={0} // Ensure element can receive keyboard focus
        />
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
            onClick={toggleMenu}
          />
          <ListItem className="text-base text-zinc-300 pl-4">그룹</ListItem>
          <GroupProfileSidebarItems onClick={toggleMenu} />
          <ListItem className="text-base text-zinc-300 pl-4">장터</ListItem>
          <SidebarItem
            href={parseGroupMarketLink({
              groupSlug: group?.slug,
              businessFunction: 'sell',
            })}
            icon={<SellIcon fontSize="medium" />}
            text="판매"
            onClick={toggleMenu}
          />
          <SidebarItem
            href={parseGroupMarketLink({
              groupSlug: group?.slug,
              businessFunction: 'buy',
            })}
            icon={<ShoppingBagIcon fontSize="medium" />}
            text="구매"
            onClick={toggleMenu}
          />
          <SidebarItem
            href={parseGroupMarketLink({
              groupSlug: group?.slug,
              businessFunction: 'swap',
            })}
            icon={<SwapHorizIcon fontSize="medium" />}
            text="교환"
            onClick={toggleMenu}
          />
          <ListItem className="text-base text-zinc-300 pl-4">커뮤니티</ListItem>
          <SidebarItem
            href={parseGroupCommunityLink({
              groupSlug: group?.slug,
              communityType: 'member',
            })}
            icon={<GroupIcon fontSize="medium" />}
            text="멤버"
            onClick={toggleMenu}
          />
          <SidebarItem
            href={parseGroupCommunityLink({
              groupSlug: group?.slug,
              communityType: 'user-review',
            })}
            icon={<StickyNote2Icon fontSize="medium" />}
            text="거래 후기"
            onClick={toggleMenu}
          />
          <SidebarItem
            href={parseGroupCommunityLink({
              groupSlug: group?.slug,
              communityType: 'report',
            })}
            icon={<FlagIcon fontSize="medium" />}
            text="신고"
            onClick={toggleMenu}
          />
        </List>
      </div>
    </>
  );
}
