'use client';

import NextDialog from '@/components/auth/next-dialog';
import OfferCheckboxResults from '@/components/offers/offer-checkbox-results';
import TextFeedLayout from '@/components/posts/text-feed.layout';
import SearchInput from '@/components/search/search-input';
import { DEBOUNCE } from '@/components/search/search.constants';
import { useFindUserQuery } from '@/generated/graphql';
import { OfferCheckboxFormValues } from '@/lib/offer/offer.interfaces';
import { parseUserReviewTargetOfferFormLink } from '@/lib/user-review/parse-user-review-target-offer-form-link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

export default function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const [text, setText] = useState('');
  const [keyword] = useDebounce(text, DEBOUNCE);
  const router = useRouter();

  const { setValue, getValues, control } = useForm<OfferCheckboxFormValues>({
    defaultValues: {
      selectedId: '',
    },
  });

  const { loading, data } = useFindUserQuery({
    variables: { username },
    fetchPolicy: 'cache-first',
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

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
      parseUserReviewTargetOfferFormLink({ username, offerId: selectedId }),
    );
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const where = {
    userId: user.id,
  };

  return (
    <div className="grid max-w-3xl w-full">
      <SearchInput
        text={text}
        setText={setText}
        placeholder="매너 평가할 거래글을 선택해 주세요"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="pt-4 overflow-y-scroll">
        <div style={{ maxHeight: '75vh' }}>
          <TextFeedLayout>
            <OfferCheckboxResults
              where={where}
              type="text"
              keyword={keyword}
              distinct={false}
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
