'use client';

import SearchUsersCheckbox from '@/components/search/search-users-checkbox';
import { parseUserReviewTargetFormLink } from '@/lib/user-review/parse-user-review-target-form-link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, Suspense } from 'react';

export default function Page({
  params: { auctionId },
}: {
  params: {
    auctionId: string;
  };
}) {
  const router = useRouter();

  const handleAuthorization = (selectedId: string) => {
    if (!selectedId) return;

    router.push(
      parseUserReviewTargetFormLink({
        userId: selectedId,
        targetType: 'auction',
        targetId: auctionId,
      }),
    );
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Suspense>
      <SearchUsersCheckbox
        placeholder="어떤 멤버와 거래했나요?"
        handleAuthorization={handleAuthorization}
        handleUnAuthorization={handleUnAuthorization}
      />
    </Suspense>
  );
}
