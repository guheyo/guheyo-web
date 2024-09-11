'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import NextDialog from '@/components/auth/next-dialog';
import SearchInput from '@/components/search/search-input';
import { DEBOUNCE } from '@/components/search/search.constants';
import { PostPreviewType } from '@/lib/post/post.types';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useSearchQuery } from '@/lib/search/use-search-query';
import { MouseEventHandler, useContext } from 'react';
import { useForm } from 'react-hook-form';

export default function SearchCheckbox({
  defaultSelectedIds,
  placeholder,
  where,
  orderBy,
  type,
  distinct,
  CheckboxResults,
  handleClick,
  handleAuthorization,
  handleUnAuthorization,
  multiple = false,
  showNextButton = false,
}: {
  defaultSelectedIds: string[];
  placeholder: string;
  where?: Record<string, any>;
  orderBy?: Record<string, any>;
  type?: PostPreviewType;
  distinct?: boolean;
  CheckboxResults: React.ComponentType<any>;
  handleClick?: (selectedIds: string[]) => void;
  handleAuthorization?: (selectedIds: string[]) => void;
  handleUnAuthorization?: MouseEventHandler;
  multiple?: boolean;
  showNextButton?: boolean; // Add a prop for conditional rendering of the Next button
}) {
  const { jwtPayload } = useContext(AuthContext);
  const { text, setText } = useSearchQuery(DEBOUNCE);

  const { setValue, getValues, control } = useForm<CheckboxFormValues>({
    defaultValues: {
      selectedIds: defaultSelectedIds,
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  const handleCheckboxClick = (selectedId: string) => {
    const currentSelectedIds = getValues('selectedIds');
    if (currentSelectedIds.includes(selectedId)) {
      // Remove the ID if it's already selected (uncheck)
      setValue(
        'selectedIds',
        currentSelectedIds.filter((id) => id !== selectedId),
      );
    } else {
      setValue(
        'selectedIds',
        multiple ? [...currentSelectedIds, selectedId] : [selectedId],
      );
    }

    if (handleClick) handleClick(getValues('selectedIds'));
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
        <CheckboxResults
          where={where}
          orderBy={orderBy}
          type={type}
          distinct={distinct}
          userIdToExclude={jwtPayload?.id}
          control={control}
          handleCheckboxClick={handleCheckboxClick}
        />
      </div>

      {/* Conditionally render NextDialog only if showNextButton is true */}
      {showNextButton && handleAuthorization && handleUnAuthorization && (
        <>
          <div className="pt-8" />
          <NextDialog
            onAuthorization={() => handleAuthorization(getValues().selectedIds)} // Pass multiple selected IDs
            onUnAuthorization={handleUnAuthorization}
          />
        </>
      )}
    </div>
  );
}
