'use client';

import React, { useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '@/generated/graphql';
import { useJwtUser } from '@/hooks/use-jwt-user';
import { useSignIn } from '@/hooks/use-sign-in';
import Avatar from './avatar';

export default function LoginButton() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const jwtUser = useJwtUser();
  const signIn = useSignIn();
  const [logout, { error }] = useLogoutMutation();

  if (error) {
    router.push('/');
  }

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const handleSignOut = (): void => {
    handleCloseMenu();
    logout();
    router.push('/');
  };

  if (!jwtUser) {
    return (
      <div className="inline-flex items-center">
        <div>
          <button
            type="submit"
            className="bg-star-500 hover:bg-star-400 text-sm font-bold p-2 rounded text-light-200"
            onClick={() => signIn('discord')}
          >
            로그인
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <IconButton className="inline-flex items-center" onClick={handleOpenMenu}>
        <Avatar name={jwtUser.username} avatarURL={jwtUser.avatarURL} />
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
          <Link
            href={`/user/${jwtUser.username}/home`}
            onClick={handleCloseMenu}
          >
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
            <button type="submit" onClick={handleSignOut}>
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
