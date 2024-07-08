'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import SearchInput from './search-input';
import { DEBOUNCE } from './search.constants';
import TextFeedLayout from '../posts/text-feed.layout';
import CommunityCategoriesNavbar from '../thread/community-categories-navbar';
import ThreadFeed from '../thread/thread-feed';
import CommunityTypePathUpdater from '../community/community-type-path-updater';

export default function SearchThreads() {
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);

  const where: FindThreadPreviewsWhereInput = {};
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid w-full">
      <SearchInput
        text={text}
        setText={setText}
        placeholder="어떤 게시글을 찾고 있나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="pt-4 mx-2.5 md:mx-1">
        <CommunityCategoriesNavbar />
      </div>
      <div className="pb-2">
        <CommunityTypePathUpdater />
      </div>
      <TextFeedLayout>
        <ThreadFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
          keyword={keyword}
        />
      </TextFeedLayout>
    </div>
  );
}
