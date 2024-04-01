'use client';

import React, { useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFindMyUserQuery, useLogoutMutation } from '@/generated/graphql';
import { parseUserHomeLink } from '@/lib/user/parse-user-page.link';
import { LoadingButton } from '@mui/lab';
import Avatar from '../base/avatar';
import LoggedInUserAlertDialog from './logged-in-user-alert-dialog';

export default function LoggedInUserButton({ userId }: { userId: string }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const [loading, setLoading] = useState(false);
  const [logout] = useLogoutMutation();
  const { data, loading: userLoading } = useFindMyUserQuery({
    variables: {
      id: userId,
    },
  });

  if (userLoading) return <div />;
  if (!data?.findMyUser) return <div />;
  const user = data.findMyUser;

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    setLoading(true);
    handleCloseMenu();
    logout();
    router.push('/');
    setLoading(false);
  };

  return (
    <div>
      <LoggedInUserAlertDialog user={user} />
      <IconButton className="inline-flex items-center" onClick={handleOpenMenu}>
        <Avatar name={user.username} avatarURL={user.avatarURL} />
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
            href={parseUserHomeLink({ username: user.username })}
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
