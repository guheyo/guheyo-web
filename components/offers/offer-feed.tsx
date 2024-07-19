'use client';

import { useRef } from 'react';
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
  FindOffersOrderByInput,
  FindOffersWhereInput,
} from '@/generated/graphql';
import SelectUserReviewTargetUserDialog from '../user-review/select-user-review-target-user-dialog';
import ReceivedUserReviewsDialog from '../user-review/received-user-reviews-dialog';

function OfferFeed({
  defaultWhere,
  defaultOrderBy,
  keyword,
  type,
  defaultDistinct,
}: {
  defaultWhere: FindOffersWhereInput;
  defaultOrderBy?: FindOffersOrderByInput;
  keyword?: string;
  type: PostPreviewType;
  defaultDistinct: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
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

  const period = searchParams.get('period');
  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  const distinct =
    searchParams.get('distinct') === null
      ? defaultDistinct
      : searchParams.get('distinct') !== 'false';

  const { loading, data } = useInfiniteOfferFeed({
    ref,
    where: {
      businessFunction: defaultWhere?.businessFunction,
      groupId: group?.id,
      categoryId: category?.id,
      status,
      isArchived,
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
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findOfferPreviews) return <div />;

  const edges = data.findOfferPreviews.edges.filter((edge) =>
    status ? edge.node.status === status : true,
  );

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-col gap-0">
          <OfferPreview offer={edge.node} type={type} />
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
      <div ref={ref} />
    </>
  );
}

export default OfferFeed;
