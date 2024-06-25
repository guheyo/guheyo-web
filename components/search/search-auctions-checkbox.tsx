'use client';

import NextDialog from '@/components/auth/next-dialog';
import SearchInput from '@/components/search/search-input';
import { DEBOUNCE } from '@/components/search/search.constants';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useSearchQuery } from '@/lib/search/use-search-query';
import { MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { AUCTION_CLOSED } from '@/lib/auction/auction.constants';
import AuctionCheckboxResults from '../auction/auction-checkbox-results';

export default function SearchAuctionsCheckbox({
  userId,
  placeholder,
  handleAuthorization,
  handleUnAuthorization,
}: {
  userId: string;
  placeholder: string;
  handleAuthorization: (selectedId: string) => void;
  handleUnAuthorization: MouseEventHandler;
}) {
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

  const handleSelection = (seletedId: string) => {
    setValue('selectedId', seletedId);
  };

  const where = {
    userId,
    status: AUCTION_CLOSED,
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
        <AuctionCheckboxResults
          where={where}
          keyword={keyword}
          distinct={false}
          control={control}
          handleSelection={handleSelection}
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
