'use client';

import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import {
  PRIVATE_USER_HOME_OPTIONS,
  PUBLIC_USER_HOME_OPTIONS,
} from './user-home.constants';
import ScrollTextNavbar from '../base/scroll-text-navbar';
import { AuthContext } from '../auth/auth.provider';

export default function UserHomeNavbar({ username }: { username: string }) {
  const pathname = usePathname();
  const selectedValue = pathname.split(`/`).at(3);
  const { jwtPayload } = useContext(AuthContext);

  if (jwtPayload?.username !== username)
    return (
      <ScrollTextNavbar
        options={PUBLIC_USER_HOME_OPTIONS}
        selectedValue={selectedValue}
        parseNewURL={(value) => `/user/${username}/${value}`}
      />
    );
  return (
    <ScrollTextNavbar
      options={PRIVATE_USER_HOME_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => `/user/${username}/${value}`}
    />
  );
}
