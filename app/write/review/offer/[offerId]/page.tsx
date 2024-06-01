'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import NextDialog from '@/components/auth/next-dialog';
import SearchInput from '@/components/search/search-input';
import { DEBOUNCE } from '@/components/search/search.constants';
import UserCheckboxResults from '@/components/users/user-checkbox-results';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useSearchQuery } from '@/lib/search/use-search-query';
import { parseUserReviewTargetOfferFormLink } from '@/lib/user-review/parse-user-review-target-offer-form-link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useContext } from 'react';
import { useForm } from 'react-hook-form';

export default function Page({
  params: { offerId },
}: {
  params: {
    offerId: string;
  };
}) {
  const router = useRouter();
  const { jwtPayload } = useContext(AuthContext);
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);

  const { setValue, getValues, control } = useForm<CheckboxFormValues>({
    defaultValues: {
      selectedId: '',
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  const handleOfferSelection = (seletedId: string) => {
    setValue('selectedId', seletedId);
  };

  const handleAuthorization: MouseEventHandler = (e) => {
    const { selectedId } = getValues();
    if (!selectedId) return;

    router.push(
      parseUserReviewTargetOfferFormLink({ userId: selectedId, offerId }),
    );
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const where = {};

  return (
    <div className="grid w-full">
      <SearchInput
        text={text}
        setText={setText}
        placeholder="어떤 멤버와 거래했나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="pt-4 overflow-y-scroll max-h-[75vh] grid gap-2 grid-cols-1">
        <UserCheckboxResults
          where={where}
          keyword={keyword}
          userIdToExclude={jwtPayload?.id}
          control={control}
          handleOfferSelection={handleOfferSelection}
        />
      </div>
      <div className="pt-4" />
      <NextDialog
        onAuthorization={handleAuthorization}
        onUnAuthorization={handleUnAuthorization}
      />
    </div>
  );
}
