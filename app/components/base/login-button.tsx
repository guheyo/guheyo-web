'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Avatar from './avatar';

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
          className="mt-1 pr-3 pl-3 w-[250px] ml-3"
          disableScrollLock
        >
          <MenuItem className="text-sm rounded-md w-[180px] focus:bg-transparent pb-2 pt-2">
            <div className=" focus:bg-gray-100 hover:bg-gray-100 w-full h-[35px] rounded-md ">
              <button
                type="submit"
                onClick={handleSignOut}
                className="w-full p-1"
              >
                <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                  <PowerIcon width={18} height={18} />
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
          className="bg-black hover:bg-gray-700 text-sm font-bold p-2 rounded text-white"
          onClick={() => signIn('discord')}
        >
          로그인
        </button>
      </div>
    </div>
  );
}
