'use client';

import OfferVersionDetail from '@/components/offers/offer-version-detail';
import PostDetailAddons from '@/components/posts/post-detail-addons';
import ReportCard from '@/components/reports/report-card';
import { useFindReportQuery } from '@/generated/graphql';
import { OFFER } from '@/lib/offer/offer.constants';
import { POST } from '@/lib/post/post.constants';
import { use } from 'react';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data, loading } = useFindReportQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findReport) return <div />;
  const report = data.findReport;

  if (report.type === POST) {
    if (report.reportedPost?.type === OFFER) {
      return (
        <div className="flex flex-col gap-4">
          <OfferVersionDetail
            versionCreatedAt={report.version.createdAt}
            images={report.version.images}
            user={report.reportedUser}
            offer={report.version.values}
            post={report.reportedPost}
          />
          <div className="px-2 md:px-0">
            <ReportCard
              reportId={report.id}
              reason={report.reason}
              description={report.description}
              createdAt={report.createdAt}
              reportedUser={report.reportedUser}
              type={report.type}
            />
          </div>
          <div className="px-2 md:px-0 text-base md:text-lg text-gray-300 font-bold">
            <PostDetailAddons />
          </div>
        </div>
      );
    }
  }
  return <div />;
}
