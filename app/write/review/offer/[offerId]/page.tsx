'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import NextDialog from '@/components/auth/next-dialog';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import SearchInput from '@/components/search/search-input';
import { DEBOUNCE } from '@/components/search/search.constants';
import UserCheckboxResults from '@/components/users/user-checkbox-results';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { parseUserReviewTargetOfferFormLink } from '@/lib/user-review/parse-user-review-target-offer-form-link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

export default function Page({
  params: { offerId },
}: {
  params: {
    offerId: string;
  };
}) {
  const { jwtPayload } = useContext(AuthContext);
  const [text, setText] = useState('');
  const [keyword] = useDebounce(text, DEBOUNCE);
  const router = useRouter();

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
      <div className="pt-4 overflow-y-scroll">
        <div style={{ maxHeight: '75vh' }}>
          <TextFeedLayout>
            <UserCheckboxResults
              where={where}
              keyword={keyword}
              userIdToExclude={jwtPayload?.id}
              control={control}
              handleOfferSelection={handleOfferSelection}
            />
          </TextFeedLayout>
        </div>
      </div>
      <div className="pt-4" />
      <NextDialog
        onAuthorization={handleAuthorization}
        onUnAuthorization={handleUnAuthorization}
      />
    </div>
  );
}
