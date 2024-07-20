'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import React, { ReactNode } from 'react';
import { FeedComponent, FeedComponentProps } from '@/lib/feed/feed.interfaces';
import { useGroup } from '@/hooks/use-group';
import SearchInput from './search-input';
import { DEBOUNCE } from './search.constants';
import TextFeedLayout from '../posts/text-feed.layout';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';

export default function SearchContainer({
  placeholder,
  categories,
  tags,
  selectors,
  Feed,
  feedProps,
}: {
  placeholder: string;
  categories?: ReactNode;
  tags?: ReactNode;
  selectors?: ReactNode;
  Feed: FeedComponent;
  feedProps: Omit<FeedComponentProps, 'keyword'>;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);
  const { group } = useGroup();

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
      <div className="pt-2" />
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          currentGroupId={group?.id}
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
      {categories && <div className="mx-2.5 md:mx-1">{categories}</div>}
      {tags && <div className="mx-2.5 md:mx-1">{tags}</div>}
      {(categories || tags) && <div className="mb-4" />}
      {selectors && (
        <div className="flex justify-between pb-2">{selectors}</div>
      )}
      <TextFeedLayout>
        <Feed keyword={keyword} {...feedProps} />
      </TextFeedLayout>
    </div>
  );
}
