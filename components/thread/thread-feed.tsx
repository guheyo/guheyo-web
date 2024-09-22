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
import { ThreadValues } from '@/lib/thread/thread.types';
import parseCreateThreadInput from '@/lib/thread/parse-create-thread-input';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { createThread } from '@/lib/api/thread';
import ThreadPreview from './thread-preview';
import ThreadCard from './thread-card';
import { AuthContext } from '../auth/auth.provider';

function ThreadFeed({
  defaultWhere,
  defaultOrderBy,
  type,
}: {
  defaultWhere: FindThreadPreviewsWhereInput;
  defaultOrderBy?: FindThreadPreviewsOrderByInput;
  type: PostPreviewType;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup('root');
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
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

  const handleWrite = async (values: ThreadValues) => {
    if (!jwtPayload || !group || !values.content) return;

    const input = parseCreateThreadInput({
      threadValues: {
        ...values,
        groupId: group.id,
        categoryId: category?.id,
        brandId: defaultWhere.brandIds ? defaultWhere.brandIds[0] : undefined,
      },
    });
    await createThread(input);
  };

  const { loading, data } = useInfiniteThreadFeed({
    ref,
    where: {
      groupId: group?.slug !== 'root' ? group?.id : undefined,
      userId: defaultWhere.userId,
      categoryId: category?.id,
      categoryType: defaultWhere.categoryType,
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
      <div className="py-6">
        <ThreadCard
          user={user || undefined}
          isCurrentUser
          isAuthor={!!user?.id}
          displayMenu
          displayImagesInput
          defaultMode="create"
          images={[]}
          reactions={[]}
          textFieldProps={{
            multiline: true,
            placeholder: '메시지 보내기',
            minRows: 1,
            size: 'small',
          }}
          handleWrite={handleWrite}
        />
      </div>
      {edges.map((edge) => (
        <ThreadPreview
          key={edge.node.id}
          type={type}
          thread={edge.node}
          isInGroup={!!group}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default ThreadFeed;
