'use client';

import BidderCheckboxResults from '@/components/auction/bidder-checkbox-results';
import SearchCheckbox from '@/components/search/search-checkbox';
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

  const where = {
    auctionId,
  };

  return (
    <Suspense>
      <SearchCheckbox
        placeholder="어떤 멤버와 거래했나요?"
        where={where}
        CheckboxResults={BidderCheckboxResults}
        handleAuthorization={handleAuthorization}
        handleUnAuthorization={handleUnAuthorization}
      />
    </Suspense>
  );
}
