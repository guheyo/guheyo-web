'use client';

import Image from 'next/image';
import React, { useContext, useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '@/generated/graphql';
import signIn from '@/lib/auth/sign-in';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import { LoadingButton } from '@mui/lab';
import Avatar from '../base/avatar';
import { AuthContext } from './auth.provider';

export default function LoginButton() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const [loading, setLoading] = useState(false);
  const { jwtPayload } = useContext(AuthContext);
  const [logout] = useLogoutMutation();

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const handleSignIn = async () => {
    setLoading(true);
    await signIn(router, 'discord');
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    handleCloseMenu();
    logout();
    router.push('/');
    setLoading(false);
  };

  if (!jwtPayload) {
    return (
      <LoadingButton
        type="submit"
        loading={loading}
        className="inline-flex items-center bg-discord-blue-500 hover:bg-discord-blue-700 text-xs md:text-sm font-bold p-2 rounded text-light-200 flex flex-row gap-2"
        onClick={handleSignIn}
      >
        <Image
          alt="로그인"
          src="/socials/discord/discord-mark-white.svg"
          width={20}
          height={20}
        />
        로그인
      </LoadingButton>
    );
  }

  return (
    <div>
      <IconButton className="inline-flex items-center" onClick={handleOpenMenu}>
        <Avatar name={jwtPayload.username} avatarURL={jwtPayload.avatarURL} />
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
            href={parseUserHomeLink({ username: jwtPayload.username })}
            onClick={handleCloseMenu}
            className="flex justify-center w-full"
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
            <LoadingButton
              type="submit"
              loading={loading}
              onClick={handleSignOut}
            >
              <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                <LogoutIcon />
                <span>로그아웃</span>
              </div>
            </LoadingButton>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
