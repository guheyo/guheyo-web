'use client';

import AuctionDetail from '@/components/auction/auction-detail';
import AuctionDetailAddons from '@/components/auction/auction-detail-addons';
import AuctionInteractionItemFeed from '@/components/auction/auction-interaction-item-feed';
import AuctionInteractionItemsSelector from '@/components/auction/auction-interaction-items-selector';
import ReportFeed from '@/components/reports/report-feed';
import { useFindAuctionQuery } from '@/generated/graphql';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';
import {
  FindAuctionInteractionItemsOrderByArgs,
  FindAuctionInteractionItemsWhereArgs,
} from '@/lib/auction/auction.interfaces';
import { parseAuctionInteractionItem } from '@/lib/auction/parse-auction-interaction-item';
import { useSearchParams } from 'next/navigation';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const searchParams = useSearchParams();
  const view = parseAuctionInteractionItem({ view: searchParams.get('view') });

  const { data, loading } = useFindAuctionQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findAuction) return <div />;

  const auction = data.findAuction;
  const reportWhere: FindReportPreviewsWhereArgs = {
    type: 'post',
    refId: auction.post.id,
  };

  const reportOrderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  const where: FindAuctionInteractionItemsWhereArgs = {
    auctionId: auction.id,
    postId: auction.post.id,
    view,
  };
  const orderBy: FindAuctionInteractionItemsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <div className="flex flex-col gap-6 md:gap-6">
      <AuctionDetail auction={auction} />
      {auction.post.reportCount > 0 && (
        <div className="flex flex-col gap-2 pt-14">
          <div
            id="report"
            className="text-base md:text-lg text-gray-300 font-bold px-4 md:px-0"
          >
            신고 {auction.post.reportCount}개
          </div>
          <div className="px-2 md:px-0">
            <ReportFeed where={reportWhere} orderBy={reportOrderBy} />
          </div>
        </div>
      )}
      <div className="pt-14 px-4 md:px-0 flex flex-row justify-between items-center text-base md:text-lg text-gray-300 font-bold">
        <AuctionDetailAddons
          bidCount={auction.bidCount}
          commentCount={auction.post.commentCount || 0}
        />
        <AuctionInteractionItemsSelector />
      </div>
      <div className="px-4 md:px-0">
        <AuctionInteractionItemFeed where={where} orderBy={orderBy} />
      </div>
    </div>
  );
}

export default Page;
