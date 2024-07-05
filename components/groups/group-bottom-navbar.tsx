'use client';

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { parseMarketLink } from '@/lib/offer/parse-market-link';
import { parseCommunityLink } from '@/lib/community/parse-community-link';
import BottomNavbarItem from '../base/bottom-navbar-item';

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
  groupSlug: string;
}) {
  const classes = useStyles();
  const [showComponent, setShowComponent] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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
      <div className="grid grid-rows grid-cols-12 gap-0 bg-dark-500 w-screen py-2 px-4">
        <div className="col-span-4">
          <BottomNavbarItem
            href="/"
            icon={<HomeIcon fontSize="small" className="hover:text-gray-300" />}
            text="홈"
          />
        </div>
        <div className="col-span-4">
          <BottomNavbarItem
            href={parseMarketLink({ groupSlug, businessFunction: 'sell' })}
            icon={
              <ShoppingBagIcon
                fontSize="small"
                className="hover:text-gray-300"
              />
            }
            text="장터"
          />
        </div>
        <div className="col-span-4">
          <BottomNavbarItem
            href={parseCommunityLink({
              groupSlug,
              communityType: 'member',
            })}
            icon={
              <GroupIcon fontSize="small" className="hover:text-gray-300" />
            }
            text="커뮤니티"
          />
        </div>
      </div>
    </nav>
  );
}
