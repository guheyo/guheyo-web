'use client';

import { SortOrder } from '@/types/sort.types';
import { useSearchParams } from 'next/navigation';
import CommunityCategoriesNavbar from '../thread/community-categories-navbar';
import ThreadAndReviewFeed from '../community/thread-and-review-feed';
import SearchContainer from './search-container';
import MannerTagsNavbar from '../user-review/manner-tags-navbar';
import CommunityTagsNavbar from '../community/community-tags-navbar';

export default function SearchThreadsAndReviews() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  const where = {};
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <SearchContainer
      placeholder="어떤 게시글을 찾고 있나요?"
      categories={<CommunityCategoriesNavbar />}
      tags={
        categorySlug === 'review' ? (
          <MannerTagsNavbar />
        ) : (
          <CommunityTagsNavbar categorySlug={categorySlug || ''} />
        )
      }
      Feed={ThreadAndReviewFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: false,
      }}
    />
  );
}
