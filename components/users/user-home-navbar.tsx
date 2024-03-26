'use client';

import { usePathname } from 'next/navigation';
import { USER_HOME_OPTIONS } from './user-home.constants';
import ScrollTextNavbar from '../base/scroll-text-navbar';

export default function UserHomeNavbar({ username }: { username: string }) {
  const pathname = usePathname();
  const selectedValue = pathname.split(`/`).at(3);

  return (
    <ScrollTextNavbar
      options={USER_HOME_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => `/user/${username}/${value}`}
    />
  );
}
