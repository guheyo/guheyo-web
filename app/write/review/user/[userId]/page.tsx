'use client';

import SelectionRadioGroup from '@/components/base/selection-radio-group';
import SearchAuctionsCheckbox from '@/components/search/search-auctions-checkbox';
import SearchOffersCheckbox from '@/components/search/search-offers-checkbox';
import { parseUserReviewTargetFormLink } from '@/lib/user-review/parse-user-review-target-form-link';
import {
  USER_REVIEW_TARGET_TYPE_OPTIONS,
  UserReviewTargetType,
} from '@/lib/user-review/user-review.constants';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, Suspense, useState } from 'react';

export default function Page({
  params: { userId },
}: {
  params: {
    userId: string;
  };
}) {
  const [selectedOption, setSelectedOption] =
    useState<UserReviewTargetType>('offer');
  const router = useRouter();

  const handleAuthorization = (selectedId: string) => {
    if (!selectedId) return;

    router.push(
      parseUserReviewTargetFormLink({
        userId,
        targetType: selectedOption,
        targetId: selectedId,
      }),
    );
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as UserReviewTargetType);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <SelectionRadioGroup
        formLabel="거래 유형"
        selectedOption={selectedOption}
        radioOptions={USER_REVIEW_TARGET_TYPE_OPTIONS}
        handleOptionChange={handleOptionChange}
      />
      <Suspense>
        {selectedOption === 'offer' && (
          <SearchOffersCheckbox
            userId={userId}
            placeholder="매너 평가할 거래글을 선택해 주세요"
            handleAuthorization={handleAuthorization}
            handleUnAuthorization={handleUnAuthorization}
          />
        )}
        {selectedOption === 'auction' && (
          <SearchAuctionsCheckbox
            userId={userId}
            placeholder="매너 평가할 경매글을 선택해 주세요"
            handleAuthorization={handleAuthorization}
            handleUnAuthorization={handleUnAuthorization}
          />
        )}
      </Suspense>
    </div>
  );
}
