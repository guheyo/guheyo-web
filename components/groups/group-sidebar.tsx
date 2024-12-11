'use client';

import { List, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ShopIcon from '@mui/icons-material/Shop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import GavelIcon from '@mui/icons-material/Gavel';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FlagIcon from '@mui/icons-material/Flag';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import { useGroup } from '@/hooks/use-group';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { OFFER_CHANNELS } from '@/lib/market/market.constants';
import { GroupStatus } from '@/generated/graphql';
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
    return (
      <div
        className={`fixed top-0 lg:top-14 left-0 h-screen w-72 lg:w-64 bg-dark-600 text-gray-400 pt-4 px-4 z-50 ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block`}
      />
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
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
            그룹
          </ListItem>
          <GroupProfileSidebarItems
            currentGroupId={group?.id}
            status={GroupStatus.Major}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
            pathFormatter={(slug) => `/g/${slug}`}
          />
          <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
            장터
          </ListItem>
          <SidebarItem
            href={parseChannelLink({
              groupSlug: group?.slug,
              channelSlug: 'auction',
            })}
            icon={<GavelIcon fontSize="medium" />}
            text="경매"
            isActive={activeItem === 'auction'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseChannelLink({
              groupSlug: group?.slug,
              channelSlug: 'sell',
            })}
            icon={<StorefrontIcon fontSize="medium" />}
            text="거래"
            isActive={OFFER_CHANNELS.includes(activeItem)}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseChannelLink({
              groupSlug: group?.slug,
              channelSlug: 'gb',
            })}
            icon={<ShopIcon fontSize="medium" />}
            text="공동구매"
            isActive={activeItem === 'gb'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <ListItem className="text-sm lg:text-sm text-zinc-300 pt-4 md:pt-6 pl-4">
            커뮤니티
          </ListItem>
          <SidebarItem
            href={parseChannelLink({
              groupSlug: group?.slug,
              channelSlug: 'brand',
            })}
            icon={<FavoriteIcon fontSize="medium" />}
            text="브랜드"
            isActive={['brand', 'community'].includes(activeItem)}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseChannelLink({
              groupSlug: group?.slug,
              channelSlug: 'review',
            })}
            icon={<StickyNote2Icon fontSize="medium" />}
            text="거래 후기"
            isActive={activeItem === 'review'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseChannelLink({
              groupSlug: group?.slug,
              channelSlug: 'member',
            })}
            icon={<GroupIcon fontSize="medium" />}
            text="멤버"
            isActive={activeItem === 'member'}
            paddingX={2}
            paddingY={1}
            onClick={handleMenuToggle}
          />
          <SidebarItem
            href={parseChannelLink({
              groupSlug: group?.slug,
              channelSlug: 'report',
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
