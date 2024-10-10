'use client';

import { useContext, useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
  useFindAuthorQuery,
} from '@/generated/graphql';
import { useInfiniteThreadFeed } from '@/hooks/use-infinite-thread-feed';
import { PostPreviewType } from '@/lib/post/post.types';
import { useSearchParams } from 'next/navigation';
import { findCategory } from '@/lib/group/find-category';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import ThreadPreview from './thread-preview';
import { AuthContext } from '../auth/auth.provider';
import ThreadCardContainer from './thread-card-container';

function ThreadFeed({
  type,
  defaultWhere,
  defaultOrderBy,
  showInput,
}: {
  type: PostPreviewType;
  defaultWhere: FindThreadPreviewsWhereInput;
  defaultOrderBy?: FindThreadPreviewsOrderByInput;
  showInput?: boolean;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup('root');
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const tagName = [null, 'all'].includes(searchParams.get('tag'))
    ? undefined
    : searchParams.get('tag');
  const period = searchParams.get('period');
  const followed = [null, 'all'].includes(searchParams.get('followed'))
    ? undefined
    : searchParams.get('followed') === 'true';
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  const { data: UserData } = useFindAuthorQuery({
    variables: {
      id: jwtPayload?.id,
    },
  });
  const user = UserData?.findAuthor;

  const { loading, data } = useInfiniteThreadFeed({
    ref,
    where: {
      groupId: group?.slug !== 'root' ? group?.id : undefined,
      userId: defaultWhere.userId,
      categoryId: category?.id,
      categoryType: defaultWhere.categoryType,
      tagNames: categorySlug === 'meetup' && tagName ? [tagName] : undefined,
      brandIds: defaultWhere.brandIds,
      createdAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
      followed,
    },
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'desc',
    },
    keyword,
    target,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findThreadPreviews) return <div />;

  const { edges } = data.findThreadPreviews;
  return (
    <>
      {showInput && (
        <div className="py-6">
          <ThreadCardContainer
            defaultMode="create"
            user={user || undefined}
            defaultGroupId={group?.name === 'root' ? undefined : group?.id}
            defaultCategoryTypes={
              defaultWhere.categoryType ? [defaultWhere.categoryType] : []
            }
            defaultBrandId={
              defaultWhere.brandIds ? defaultWhere.brandIds[0] : undefined
            }
            defaultImages={[]}
          />
        </div>
      )}
      {edges.map((edge) => (
        <ThreadPreview
          key={edge.node.id}
          type={type}
          thread={edge.node}
          displayGroup={!group || group.name === 'root'}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default ThreadFeed;
