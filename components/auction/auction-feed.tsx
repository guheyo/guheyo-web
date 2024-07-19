'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { findCategory } from '@/lib/group/find-category';
import { useInfiniteAuctionFeed } from '@/hooks/use-infinite-auction-feed';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import { PostPreviewType } from '@/lib/post/post.types';
import { FindAuctionPreviewsWhereInput } from '@/generated/graphql';
import AuctionPreview from './auction-preview';
import SelectUserReviewTargetUserDialog from '../user-review/select-user-review-target-user-dialog';
import ReceivedUserReviewsDialog from '../user-review/received-user-reviews-dialog';

function AuctionFeed({
  type,
  defaultWhere,
  defaultSortOrder,
  keyword,
  defaultDistinct,
}: {
  type: PostPreviewType;
  defaultWhere: FindAuctionPreviewsWhereInput;
  defaultSortOrder?: string;
  keyword?: string;
  defaultDistinct: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const status = parseAuctionStatus({
    status:
      searchParams.get('status') || (defaultWhere.status as string | undefined),
  });
  const period = searchParams.get('period');
  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: searchParams.get('sort') || defaultSortOrder,
  });

  const distinct =
    searchParams.get('distinct') === null
      ? defaultDistinct
      : searchParams.get('distinct') !== 'false';

  const { loading, data } = useInfiniteAuctionFeed({
    ref,
    where: {
      groupId: group?.id,
      categoryId: category?.id,
      status,
      userId: defaultWhere.userId,
      createdAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: {
      createdAt: orderBy?.createdAt,
      extendedEndDate: orderBy?.extendedEndDate,
      currentBidPrice: orderBy?.currentBidPrice,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findAuctionPreviews) return <div />;

  const edges = data.findAuctionPreviews.edges.filter((edge) =>
    status ? edge.node.status === status : true,
  );

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-col gap-0">
          <AuctionPreview type={type} auction={edge.node} isInGroup={!!group} />
          {edge.node.hasSubmittedReview === false && (
            <div className="pb-2">
              <SelectUserReviewTargetUserDialog
                targetType="auction"
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

export default AuctionFeed;
