'use client';

import { COMMENT_SORT_OPTIONS } from '@/lib/comment/comment.constants';
import QuerySelector from '../selectors/query-selector';

export default function CommentSelector() {
  return (
    <QuerySelector
      queryKey="view"
      defaultValue="newest"
      options={COMMENT_SORT_OPTIONS}
      inputClassName="px-3 py-2 text-xs md:text-sm"
    />
  );
}
