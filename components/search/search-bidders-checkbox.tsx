'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import NextDialog from '@/components/auth/next-dialog';
import SearchInput from '@/components/search/search-input';
import { DEBOUNCE } from '@/components/search/search.constants';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useSearchQuery } from '@/lib/search/use-search-query';
import { MouseEventHandler, useContext } from 'react';
import { useForm } from 'react-hook-form';
import BidderCheckboxResults from '../auction/bidder-checkbox-results';

export default function SearchBiddersCheckbox({
  auctionId,
  placeholder,
  handleAuthorization,
  handleUnAuthorization,
}: {
  auctionId: string;
  placeholder: string;
  handleAuthorization: (selectedId: string) => void;
  handleUnAuthorization: MouseEventHandler;
}) {
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

  const handleCheckboxClick = (seletedId: string) => {
    setValue('selectedId', seletedId);
  };

  const where = {
    auctionId,
  };

  return (
    <div className="grid w-full">
      <SearchInput
        text={text}
        setText={setText}
        placeholder={placeholder}
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="pt-4 overflow-y-scroll max-h-[75vh] grid gap-2 grid-cols-1">
        <BidderCheckboxResults
          where={where}
          keyword={keyword}
          userIdToExclude={jwtPayload?.id}
          control={control}
          handleCheckboxClick={handleCheckboxClick}
        />
      </div>
      <div className="pt-4" />
      <NextDialog
        onAuthorization={() => handleAuthorization(getValues().selectedId)}
        onUnAuthorization={handleUnAuthorization}
      />
    </div>
  );
}
