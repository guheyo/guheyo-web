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

  const handleAuthorization = (selectedIds: string[]) => {
    if (selectedIds.length === 0) return;

    router.push(
      parseUserReviewTargetFormLink({
        userId: selectedIds[0],
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
        defaultSelectedIds={[]}
        placeholder="어떤 멤버와 거래했나요?"
        where={where}
        CheckboxResults={BidderCheckboxResults}
        size="medium"
        handleAuthorization={handleAuthorization}
        handleUnAuthorization={handleUnAuthorization}
        showNextButton
      />
    </Suspense>
  );
}
