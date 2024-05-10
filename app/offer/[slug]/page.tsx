'use client';

import OfferDetail from '@/components/offers/offer-detail';
import ReportFeed from '@/components/reports/report-feed';
import { useFindOfferQuery } from '@/generated/graphql';
import {
  FindReportPreviewsOrderByArgs,
  FindReportPreviewsWhereArgs,
} from '@/interfaces/report.interfaces';

function OfferPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { data, loading } = useFindOfferQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });
  if (loading) return <div />;
  if (!data?.findOffer) return <div />;

  const offer = data.findOffer;

  const where: FindReportPreviewsWhereArgs = {
    type: 'post',
    refId: offer.post.id,
  };

  const orderBy: FindReportPreviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <div>
      <OfferDetail offer={offer} />
      <div className="flex flex-col gap-2 px-4 md:px-0 pt-14">
        <div
          id="report"
          className="text-base md:text-lg text-gray-300 font-bold"
        >
          신고 {offer.post.reportCount}개
        </div>
        <ReportFeed where={where} orderBy={orderBy} />
      </div>
    </div>
  );
}

export default OfferPage;
