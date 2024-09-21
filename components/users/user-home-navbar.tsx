'use client';

import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import {
  PRIVATE_USER_HOME_OPTIONS,
  PUBLIC_USER_HOME_OPTIONS,
} from '@/lib/user/user.constants';
import { AuthContext } from '../auth/auth.provider';
import TextNavbar from '../base/text-navbar';

export default function UserHomeNavbar({ username }: { username: string }) {
  const pathname = usePathname();
  const selectedValue = pathname.split(`/`).at(3);
  const { jwtPayload } = useContext(AuthContext);

  if (jwtPayload?.username !== username)
    return (
      <TextNavbar
        options={PUBLIC_USER_HOME_OPTIONS}
        selectedValue={selectedValue}
        parseNewURL={(value) => `/user/${username}/${value}`}
        size="medium"
      />
    );
  return (
    <TextNavbar
      options={PRIVATE_USER_HOME_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => `/user/${username}/${value}`}
      size="medium"
    />
  );
}
