import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NavbarIconLayout from './navbar-icon.layout';

const useStyles = makeStyles((theme: Theme) => ({
  bottomNavbar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
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

export default function BottomNavbar() {
  const classes = useStyles();
  const [showComponent, setShowComponent] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // const st = window.pageYOffset || document.documentElement.scrollTop;
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
      <div className="flex flex-row gap-0 text-dark-200 bg-dark-500 text-xs md:text-sm w-screen py-2 px-4 justify-between">
        <NavbarIconLayout>
          <HomeIcon />홈
        </NavbarIconLayout>
        <NavbarIconLayout>
          <ShoppingBagIcon />
          장터
        </NavbarIconLayout>
        <NavbarIconLayout>
          <GroupIcon />
          멤버생활
        </NavbarIconLayout>
      </div>
    </nav>
  );
}
