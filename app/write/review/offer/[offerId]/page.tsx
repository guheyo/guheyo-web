'use client';

import SearchCheckbox from '@/components/search/search-checkbox';
import UserCheckboxResults from '@/components/users/user-checkbox-results';
import { parseUserReviewTargetFormLink } from '@/lib/user-review/parse-user-review-target-form-link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, Suspense } from 'react';

export default function Page({
  params: { offerId },
}: {
  params: {
    offerId: string;
  };
}) {
  const router = useRouter();

  const handleAuthorization = (selectedId: string) => {
    if (!selectedId) return;

    router.push(
      parseUserReviewTargetFormLink({
        userId: selectedId,
        targetType: 'offer',
        targetId: offerId,
      }),
    );
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Suspense>
      <SearchCheckbox
        placeholder="어떤 멤버와 거래했나요?"
        where={{}}
        CheckboxResults={UserCheckboxResults}
        handleAuthorization={handleAuthorization}
        handleUnAuthorization={handleUnAuthorization}
      />
    </Suspense>
  );
}
