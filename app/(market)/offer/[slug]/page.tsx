'use client';

import RecentAuctions from '@/components/auction/recent-auctions';
import OfferDetail from '@/components/offers/offer-detail';
import PostDetailAddons from '@/components/posts/post-detail-addons';
import ReportFeed from '@/components/reports/report-feed';
import PublicUserProfile from '@/components/users/public-user-profile';
import {
  FindReportPreviewsOrderByInput,
  FindReportPreviewsWhereInput,
  useFindOfferQuery,
} from '@/generated/graphql';

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

  const where: FindReportPreviewsWhereInput = {
    type: 'post',
    refId: offer.post.id,
  };

  const orderBy: FindReportPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <div className="flex flex-col gap-4">
      <OfferDetail offer={offer} />
      {offer.post.reportCount > 0 && (
        <div className="flex flex-col gap-2 pt-4">
          <div
            id="report"
            className="text-base md:text-lg text-gray-300 font-bold px-4 md:px-0"
          >
            신고 {offer.post.reportCount}개
          </div>
          <div className="px-2 md:px-0">
            <ReportFeed defaultWhere={where} defaultOrderBy={orderBy} />
          </div>
        </div>
      )}
      <div className="px-2 md:px-0 pt-14 text-base md:text-lg text-gray-300 font-bold">
        <PostDetailAddons />
      </div>
      <div className="px-2 md:px-0">
        <RecentAuctions defaultWhere={{}} defaultDistinct={false} />
      </div>
      <div className="px-2 md:px-0 pt-14">
        <PublicUserProfile
          username={offer.post.user.username}
          displayReviewButton={false}
          type="summary"
        />
      </div>
    </div>
  );
}

export default OfferPage;
