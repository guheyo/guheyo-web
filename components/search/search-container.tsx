'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import React, { ReactNode } from 'react';
import { FeedComponent, FeedComponentProps } from '@/lib/feed/feed.interfaces';
import SearchInput from './search-input';
import { DEBOUNCE } from './search.constants';
import TextFeedLayout from '../posts/text-feed.layout';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';

export default function SearchContainer({
  placeholder,
  categories,
  selectors,
  Feed,
  feedProps,
}: {
  placeholder: string;
  categories: ReactNode;
  selectors: ReactNode;
  Feed: FeedComponent;
  feedProps: Omit<FeedComponentProps, 'keyword'>;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid max-w-4xl w-full">
      <SearchInput
        text={text}
        setText={setText}
        placeholder={placeholder}
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="flex flex-row gap-2 md:gap-6 pt-4 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) =>
            parseNewURL({
              searchParamsString: searchParams.toString(),
              pathname,
              paramsToUpdate: [
                {
                  name: 'group',
                  value: slug,
                },
              ],
            })
          }
        />
      </div>
      {categories && <div className="pt-4 mx-2.5 md:mx-1">{categories}</div>}
      {selectors && (
        <div className="pb-2 flex flex-row justify-between">{selectors}</div>
      )}
      <TextFeedLayout>
        <Feed keyword={keyword} {...feedProps} />
      </TextFeedLayout>
    </div>
  );
}
