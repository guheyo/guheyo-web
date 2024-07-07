'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import {
  FindUserReviewsOrderByArgs,
  FindUserReviewsWhereArgs,
} from '@/interfaces/user-review.interfaces';
import { useSearchParams } from 'next/navigation';
import { useFindGroupQuery } from '@/generated/graphql';
import SearchInput from './search-input';
import { DEBOUNCE } from './search.constants';
import TextFeedLayout from '../posts/text-feed.layout';
import UserReviewFeed from '../user-review/user-review-feed';
import MannerTagsNavbar from '../user-review/manner-tags-navbar';

export default function SearchUserReviews() {
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);
  const searchParams = useSearchParams();
  const groupSlug = searchParams.get('group');

  const { data } = useFindGroupQuery({
    variables: {
      slug: groupSlug,
    },
    fetchPolicy: 'cache-first',
  });

  const where: FindUserReviewsWhereArgs = {
    groupId: data?.findGroup?.id,
  };
  const orderBy: FindUserReviewsOrderByArgs = {
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
        placeholder="어떤 거래 후기를 찾고 있나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="pt-4 mx-2.5 md:mx-1">
        <MannerTagsNavbar />
      </div>
      <TextFeedLayout>
        <UserReviewFeed
          defaultWhere={where}
          defaultOrderBy={orderBy}
          keyword={keyword}
        />
      </TextFeedLayout>
    </div>
  );
}
