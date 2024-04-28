'use client';

import { usePathname } from 'next/navigation';
import {
  PRIVATE_USER_REVIEW_OPTIONS,
  PUBLIC_USER_REVIEW_OPTIONS,
} from '@/lib/user-review/user-review.constants';
import TextNavbar from '../base/text-navbar';

export default function UserReviewSubmitterNavbar({
  isPublic,
}: {
  isPublic: boolean;
}) {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);
  const options = isPublic
    ? PUBLIC_USER_REVIEW_OPTIONS
    : PRIVATE_USER_REVIEW_OPTIONS;

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
