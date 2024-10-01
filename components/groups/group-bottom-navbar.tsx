'use client';

import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { SearchRounded } from '@mui/icons-material';
import { parseMarketLink } from '@/lib/offer/parse-market-link';
import { usePathname } from 'next/navigation';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import { parseSearchLink } from '@/lib/search/parse-search-link';
import { AuthContext } from '../auth/auth.provider';
import Avatar from '../avatar/avatar';
import BottomNavbarItem from '../base/bottom-navbar-item';
import WriteButton from '../write/write-button';

const useStyles = makeStyles((theme: Theme) => ({
  bottomNavbar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 40,
    transition: 'transform 0.3s ease-out',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  hideTablet: {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

export default function GroupBottomNavbar({
  groupSlug,
}: {
  groupSlug?: string | null;
}) {
  const classes = useStyles();
  const [showComponent, setShowComponent] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const { jwtPayload } = useContext(AuthContext);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scroll down
        setShowComponent(false);
      } else {
        // Scroll up
        setShowComponent(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`${classes.bottomNavbar} ${
        showComponent ? '' : classes.hideTablet
      }`}
    >
      <div className="grid grid-rows grid-cols-10 items-center gap-0 bg-dark-500 w-screen py-2 px-4">
        <div className="col-span-2">
          <BottomNavbarItem
            href="/"
            icon={<HomeIcon fontSize="small" className="hover:text-gray-300" />}
            text="홈"
          />
        </div>
        <div className="col-span-2">
          <BottomNavbarItem
            href={parseMarketLink({ groupSlug, businessFunction: 'auction' })}
            icon={
              <StorefrontIcon
                fontSize="small"
                className="hover:text-gray-300"
              />
            }
            text="장터"
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-row justify-center">
            <WriteButton size="large" />
          </div>
        </div>
        <div className="col-span-2">
          <BottomNavbarItem
            href={parseSearchLink({
              pathname,
              groupSlug: groupSlug || undefined,
            })}
            icon={
              <SearchRounded fontSize="small" className="hover:text-gray-300" />
            }
            text="검색"
          />
        </div>
        <div className="col-span-2">
          <BottomNavbarItem
            href={parseUserHomeLink({
              username: jwtPayload?.username || '',
            })}
            icon={
              <Avatar
                name={jwtPayload?.username || 'guest'}
                src={jwtPayload?.avatarURL}
                fontSize="text-xs"
              />
            }
            text="나"
          />
        </div>
      </div>
    </nav>
  );
}
