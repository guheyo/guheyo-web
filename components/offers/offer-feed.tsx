'use client';

import { useEffect, useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteOfferFeed } from '@/hooks/use-infinite-offer-feed';
import OfferPreview from '@/components/offers/offer-preview';
import {
  FindOffersOrderByArgs,
  FindOffersWhereArgs,
} from '@/interfaces/offer.interfaces';
import { useGroup } from '@/hooks/use-group';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { findCategory } from '@/lib/group/find-category';
import SelectUserReviewTargetUserDialog from '../user-review/select-user-review-target-user-dialog';
import ReceivedUserReviewsDialog from '../user-review/received-user-reviews-dialog';

function OfferFeed({
  where,
  orderBy,
  keyword,
  type,
  distinct,
}: {
  where: FindOffersWhereArgs;
  orderBy?: FindOffersOrderByArgs;
  keyword?: string;
  type: 'text' | 'thumbnail';
  distinct: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const isArchived = searchParams.get('isArchived') === true.toString();
  const period = searchParams.get('period');
  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  useEffect(() => {}, [searchParams]);

  const { loading, data } = useInfiniteOfferFeed({
    ref,
    where: {
      businessFunction: where?.businessFunction,
      groupId: group?.id,
      categoryId: category?.id,
      status: where.status,
      isArchived,
      userId: where?.userId,
      bumpedAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: {
      bumpedAt: orderBy?.bumpedAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findOfferPreviews) return <div />;

  const edges = data.findOfferPreviews.edges.filter((edge) =>
    where.status ? edge.node.status === where.status : true,
  );

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-col gap-0">
          <OfferPreview offer={edge.node} type={type} />
          {edge.node.hasSubmittedReview === false && (
            <div className="pb-2">
              <SelectUserReviewTargetUserDialog offerId={edge.node.id} />
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
