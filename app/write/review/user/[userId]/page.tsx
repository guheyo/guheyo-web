'use client';

import AuctionCheckboxResults from '@/components/auction/auction-checkbox-results';
import { AuthContext } from '@/components/auth/auth.provider';
import SelectionRadioGroup from '@/components/base/selection-radio-group';
import OfferCheckboxResults from '@/components/offers/offer-checkbox-results';
import SearchCheckbox from '@/components/search/search-checkbox';
import { AUCTION_CLOSED } from '@/lib/auction/auction.constants';
import { parseUserReviewTargetFormLink } from '@/lib/user-review/parse-user-review-target-form-link';
import {
  USER_REVIEW_TARGET_TYPE_OPTIONS,
  UserReviewTargetType,
} from '@/lib/user-review/user-review.constants';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, Suspense, useContext, useState } from 'react';

export default function Page({
  params: { userId },
}: {
  params: {
    userId: string;
  };
}) {
  const { jwtPayload } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] =
    useState<UserReviewTargetType>('offer');
  const router = useRouter();

  const handleAuthorization = (selectedIds: string[]) => {
    if (selectedIds.length === 0) return;

    router.push(
      parseUserReviewTargetFormLink({
        userId,
        targetType: selectedOption,
        targetId: selectedIds[0],
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
          <SearchCheckbox
            defaultSelectedIds={[]}
            placeholder="매너 평가할 거래글을 선택해 주세요"
            where={{ userId }}
            type="listview"
            distinct={false}
            CheckboxResults={OfferCheckboxResults}
            handleAuthorization={handleAuthorization}
            handleUnAuthorization={handleUnAuthorization}
            showNextButton
          />
        )}
        {selectedOption === 'auction' && (
          <SearchCheckbox
            defaultSelectedIds={[]}
            placeholder="매너 평가할 경매글을 선택해 주세요"
            where={{ userId, bidderId: jwtPayload?.id, status: AUCTION_CLOSED }}
            type="listview"
            distinct={false}
            CheckboxResults={AuctionCheckboxResults}
            handleAuthorization={handleAuthorization}
            handleUnAuthorization={handleUnAuthorization}
            showNextButton
          />
        )}
      </Suspense>
    </div>
  );
}
