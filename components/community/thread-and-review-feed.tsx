'use client';

import { useContext, useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import {
  FindThreadPreviewsWhereInput,
  FindUserReviewPreviewsWhereInput,
  useFindAuthorQuery,
} from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import { useSearchParams } from 'next/navigation';
import { findCategory } from '@/lib/group/find-category';
import { useInfiniteThreadAndReviewFeed } from '@/hooks/use-infinite-thread-and-review-feed';
import { SortOrder } from '@/types/sort.types';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import ThreadPreview from '../thread/thread-preview';
import UserReviewPreview from '../user-review/user-review-preview';
import ThreadCardContainer from '../thread/thread-card-container';
import { AuthContext } from '../auth/auth.provider';

function ThreadAndReviewFeed({
  defaultWhere,
  defaultOrderBy,
  type,
  showInput,
}: {
  defaultWhere: FindThreadPreviewsWhereInput & FindUserReviewPreviewsWhereInput;
  defaultOrderBy?: { createdAt: SortOrder };
  type: PostPreviewType;
  showInput?: boolean;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup('root');
  const searchParams = useSearchParams();
  const categorySlug = [null, 'all'].includes(searchParams.get('category'))
    ? undefined
    : searchParams.get('category');
  const tagName = [null, 'all'].includes(searchParams.get('tag'))
    ? undefined
    : searchParams.get('tag');

  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });
  const tagType = [null, 'all'].includes(searchParams.get('tagType'))
    ? undefined
    : searchParams.get('tagType') || defaultWhere.tagType;
  const period = searchParams.get('period');
  const followed = [null, 'all'].includes(searchParams.get('followed'))
    ? undefined
    : searchParams.get('followed') === 'true';
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });
  const user = UserData?.findAuthor;

  const { loading, items } = useInfiniteThreadAndReviewFeed({
    ref,
    type: categorySlug
      ? categorySlug === 'review'
        ? 'review'
        : 'thread'
      : undefined,
    where: {
      groupId: group?.slug !== 'root' ? group?.id : undefined,
      userId: defaultWhere.userId,
      categoryId: category?.id,
      categoryType: 'community',
      tagType,
      tagNames: categorySlug === 'meetup' && tagName ? [tagName] : undefined,
      reviewedUserId: defaultWhere.reviewedUserId,
      createdAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
      followed,
    },
    orderBy: {
      createdAt: (defaultOrderBy?.createdAt || 'desc') as SortOrder,
    },
    keyword,
    target,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;

  return (
    <>
      {showInput && (
        <div className="py-6">
          <ThreadCardContainer
            user={user || undefined}
            defaultGroupId={group?.name === 'root' ? undefined : group?.id}
            categoryTypes={['community']}
            defaultBrandId={
              defaultWhere.brandIds ? defaultWhere.brandIds[0] : undefined
            }
            defaultImages={[]}
          />
        </div>
      )}
      {items.map((item) => {
        switch (item.__typename) {
          case 'ThreadPreviewResponseEdge':
            return (
              <ThreadPreview
                key={item.node.id}
                type={type}
                thread={item.node}
                isInGroup={!!group}
              />
            );
          case 'UserReviewPreviewResponseEdge':
            return (
              <UserReviewPreview
                key={item.node.id}
                userReview={item.node}
                isInGroup={!!group}
              />
            );
          default:
            return <div key={item.node.id} />;
        }
      })}
      <div ref={ref} />
    </>
  );
}

export default ThreadAndReviewFeed;
