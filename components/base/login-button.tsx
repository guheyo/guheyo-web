'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Avatar from './avatar';
import Link from 'next/link';

export default function LoginButton() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const menuOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const handleSignOut = (): void => {
    handleCloseMenu();
    signOut();
  };

  if (session === undefined) {
    return (
      <div className="inline-flex items-center w-8 h-8">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>
    );
  }

  if (session && session.user) {
    return (
      <div>
        <IconButton
          className="inline-flex items-center"
          onClick={handleOpenMenu}
        >
          <Avatar
            name={session.user.username}
            avatarURL={session.user.avatarURL}
          />
        </IconButton>
        <Menu
          open={menuOpen}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          onClose={handleCloseMenu}
          className="mt-1 pr-3 pl-3"
        >
          <MenuItem>
              <Link href={`/user/${session.user.username}`} onClick={handleCloseMenu}>
                <div className="focus:bg-gray-100 hover:bg-gray-100">
                  <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                    <SentimentSatisfiedAltIcon />
                    프로필
                  </div>
                </div>
              </Link>
          </MenuItem>
          <MenuItem>
            <div className="focus:bg-gray-100 hover:bg-gray-100">
              <button
                type="submit"
                onClick={handleSignOut}
              >
                <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                  <LogoutIcon />
                  <span>로그아웃</span>
                </div>
              </button>
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center">
      <div>
        <button
          type="submit"
          className="bg-star-500 hover:bg-star-400 text-sm font-bold p-2 rounded text-light-200"
          onClick={() => signIn()}
        >
          로그인
        </button>
      </div>
    </div>
  );
}
