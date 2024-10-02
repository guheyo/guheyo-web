'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import React, { ReactNode } from 'react';
import { FeedComponent, FeedComponentProps } from '@/lib/feed/feed.interfaces';
import { useGroup } from '@/hooks/use-group';
import { Option } from '@/interfaces/selector.interfaces';
import SearchInput from './search-input';
import { DEBOUNCE } from './search.constants';
import TextFeedLayout from '../posts/text-feed.layout';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';
import SearchTargetSelector from './search-target-selector';

export default function SearchContainer({
  placeholder,
  options,
  channels,
  categories,
  tags,
  selectors,
  Feed,
  feedProps,
}: {
  placeholder: string;
  options?: Option[];
  channels?: ReactNode;
  categories?: ReactNode;
  tags?: ReactNode;
  selectors?: ReactNode;
  Feed: FeedComponent;
  feedProps: FeedComponentProps;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { text, setText } = useSearchQuery(DEBOUNCE);
  const { group } = useGroup();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid max-w-4xl w-full">
      <div className="flex flex-row gap-1 items-center">
        <div className="flex-grow">
          <SearchInput
            text={text}
            setText={setText}
            placeholder={placeholder}
            handleKeyDown={handleKeyDown}
            handleChange={handleChange}
          />
        </div>
        {options && options.length > 0 && (
          <div className="w-fit">
            <SearchTargetSelector options={options} />
          </div>
        )}
      </div>
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
      {channels && <div className="mx-2.5 md:mx-1">{channels}</div>}
      {categories && <div className="mx-2.5 md:mx-1">{categories}</div>}
      {tags && <div className="mx-2.5 md:mx-1">{tags}</div>}
      {(categories || tags) && <div className="mb-4" />}
      {selectors && (
        <div className="flex justify-between pb-2">{selectors}</div>
      )}
      <TextFeedLayout>
        <Feed {...feedProps} />
      </TextFeedLayout>
    </div>
  );
}
