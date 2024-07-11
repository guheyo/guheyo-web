'use client';

import { usePathname } from 'next/navigation';
import {
  PRIVATE_THREAD_OPTIONS,
  PUBLIC_THREAD_OPTIONS,
} from '@/lib/thread/thread.constants';
import TextNavbar from '../base/text-navbar';

export default function ThreadNavbar({ isPublic }: { isPublic: boolean }) {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);
  const options = isPublic ? PUBLIC_THREAD_OPTIONS : PRIVATE_THREAD_OPTIONS;

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
