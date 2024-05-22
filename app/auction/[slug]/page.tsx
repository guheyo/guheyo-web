'use client';

import AuctionDetail from '@/components/auction/auction-detail';
import ReportFeed from '@/components/reports/report-feed';
import { useFindAuctionQuery } from '@/generated/graphql';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { data, loading } = useFindAuctionQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findAuction) return <div />;

  const auction = data.findAuction;
  const where: FindReportPreviewsWhereArgs = {
    type: 'post',
    refId: auction.post.id,
  };

  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <div>
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
            <ReportFeed where={where} orderBy={orderBy} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
