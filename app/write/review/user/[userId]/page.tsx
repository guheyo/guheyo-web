'use client';

import SearchOffersCheckbox from '@/components/search/search-offers-checkbox';
import { parseUserReviewTargetOfferFormLink } from '@/lib/user-review/parse-user-review-target-offer-form-link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, Suspense } from 'react';

export default function Page({
  params: { userId },
}: {
  params: {
    userId: string;
  };
}) {
  const router = useRouter();

  const handleAuthorization = (selectedId: string) => {
    if (!selectedId) return;

    router.push(
      parseUserReviewTargetOfferFormLink({ userId, offerId: selectedId }),
    );
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Suspense>
      <SearchOffersCheckbox
        userId={userId}
        placeholder="매너 평가할 거래글을 선택해 주세요"
        handleAuthorization={handleAuthorization}
        handleUnAuthorization={handleUnAuthorization}
      />
    </Suspense>
  );
}
