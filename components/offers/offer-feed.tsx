'use client';

import { Mocks } from '@/components/mock/mock';
import { useInfiniteOfferFeed } from '@/hooks/use-infinite-offer-feed';
import OfferPreview from '@/components/offers/offer-preview';
import { useGroup } from '@/hooks/use-group';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { findCategory } from '@/lib/group/find-category';
import { parseOfferStatus } from '@/lib/offer/parse-offer-status';
import { PostPreviewType } from '@/lib/post/post.types';
import {
  FindOfferPreviewsOrderByInput,
  FindOfferPreviewsWhereInput,
} from '@/generated/graphql';
import SelectUserReviewTargetUserDialog from '../user-review/select-user-review-target-user-dialog';
import ReceivedUserReviewsDialog from '../user-review/received-user-reviews-dialog';

function OfferFeed({
  defaultWhere,
  defaultOrderBy,
  type,
  defaultDistinct,
}: {
  defaultWhere: FindOfferPreviewsWhereInput;
  defaultOrderBy?: FindOfferPreviewsOrderByInput;
  type: PostPreviewType;
  defaultDistinct: boolean;
}) {
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  const isArchived =
    searchParams.get('isArchived') === null
      ? defaultWhere.isArchived
      : searchParams.get('isArchived') === true.toString();
  const status = parseOfferStatus({
    status: isArchived
      ? 'all'
      : searchParams.get('status') ||
        (defaultWhere.status as string | undefined),
  });
  const followed = [null, 'all'].includes(searchParams.get('followed'))
    ? undefined
    : searchParams.get('followed') === 'true';

  const period = searchParams.get('period');
  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const distinct =
    searchParams.get('distinct') === null
      ? defaultDistinct
      : searchParams.get('distinct') !== 'false';

  const { setRef, loading, data } = useInfiniteOfferFeed({
    where: {
      businessFunction: defaultWhere?.businessFunction,
      groupId: group?.id,
      categoryId: category?.id,
      status,
      isArchived,
      followed,
      userId: defaultWhere?.userId,
      bumpedAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: {
      bumpedAt: defaultOrderBy?.bumpedAt || 'desc',
      price: defaultOrderBy?.price,
    },
    keyword,
    target,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findOfferPreviews) return <div />;

  const { edges } = data.findOfferPreviews;

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-col gap-0">
          <OfferPreview offer={edge.node} type={type} displayGroup={!group} />
          {edge.node.hasSubmittedReview === false && (
            <div className="pb-2">
              <SelectUserReviewTargetUserDialog
                targetType="offer"
                targetId={edge.node.id}
              />
            </div>
          )}
          {edge.node.hasSubmittedReview === true && (
            <div className="pb-2">
              <ReceivedUserReviewsDialog offerSlug={edge.node.post.slug!} />
            </div>
          )}
        </div>
      ))}
      <div ref={setRef} />
    </>
  );
}

export default OfferFeed;
